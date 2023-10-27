import { zodResolver } from "@hookform/resolvers/zod";
import React, { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { ButtonKit, FormInputKit } from "../../common/ui";
import {
  useCreateTaskMutation,
  useEditTaskMutation,
  useSingleTaskQuery,
} from "../../features/tasks";
import { notification } from "../../lib";
import { TCreateOrEditTaskSchema } from "./models";
import { createOrEditFormInputs, createOrEditTaskFormSchema } from "./constants";

const UpsertTaskPage: FC = () => {
  // route params & transforming
  const params = useParams<"id">();
  const paramId = +params.id!;

  const navigate = useNavigate();

  // rtk query hooks for create or modify task
  const [mutateCreateTask, { isLoading: mutateCreateTaskLoading }] = useCreateTaskMutation();
  const [mutateEditTask, { isLoading: mutateEditTaskLoading }] = useEditTaskMutation();

  // rtk query for fetcing task
  const { data: selectedTask, isLoading: querySingleTaskQuery } = useSingleTaskQuery(paramId);

  // form validation
  const { control, setValue, handleSubmit } = useForm<TCreateOrEditTaskSchema>({
    resolver: zodResolver(createOrEditTaskFormSchema),
    mode: "all",
    defaultValues: {
      description: "",
      title: "",
      completed: false,
    },
  });

  const isLoading = mutateCreateTaskLoading || mutateEditTaskLoading || querySingleTaskQuery;

  useEffect(() => {
    if (selectedTask) {
      setValue("title", selectedTask?.title!);
      setValue("description", selectedTask?.description!);
      setValue("completed", selectedTask.completed);
    }
  }, [selectedTask]);

  const onSubmit = (data: TCreateOrEditTaskSchema) => {
    // base on params id check this component need edit operation or create opeation
    const operation = paramId
      ? mutateEditTask({ ...data, id: paramId })
      : mutateCreateTask({ ...data });
    notification({ action: operation, actionName: "Task" });
    navigate("/");
  };

  if (paramId && !selectedTask) {
    return <Navigate to="/" />;
  }

  return (
    <div className="w-full sm:w-4/12 mx-auto flex justify-center items-center flex-col">
      <h1 className="border-b-2 border-gray-800 font-bold text-2xl small-caps">
        {params.id ? "Edit Your Task" : "Create New Task"}
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full my-5">
        {React.Children.toArray(
          createOrEditFormInputs.map((item) => (
            <FormInputKit {...(item as any)} control={control} />
          ))
        )}
        <ButtonKit
          loading={isLoading}
          variant="primary"
          loadingVariants="spinnerWithText"
          extraClasses="text-base font-bold !mt-5 !w-full h-12"
        >
          {params.id ? "Edit Task" : "Create Task"}
        </ButtonKit>
      </form>
    </div>
  );
};

export default UpsertTaskPage;

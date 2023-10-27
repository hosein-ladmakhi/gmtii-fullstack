import { FC } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { useDeleteTaskMutation, useSingleTaskQuery } from "../../features/tasks";
import { linksPath } from "../../routes/path";
import RelatedTask from "./components/RelatesTasks";
import { ButtonKit } from "../../common/ui";

const TaskDetailPage: FC = () => {
  const [mutateDeleteTask, { isLoading: mutateDeleteTaskLoading }] = useDeleteTaskMutation();
  const params = useParams<"id">();
  const navigate = useNavigate();
  const paramsId = +params.id!;
  const { data: task, isLoading: singleTaskQueryLoading } = useSingleTaskQuery(paramsId);

  const isLoading = singleTaskQueryLoading || mutateDeleteTaskLoading;

  const onDeleteTask = () => {
    mutateDeleteTask(paramsId);
    navigate("/");
  };

  if (isLoading) {
    return <p>Loading ....</p>;
  }

  if (!task?.id) {
    return <Navigate to={linksPath.Home} />;
  }

  return (
    <>
      <div>
        <div className="flex-col sm:flex-row mb-5 flex justify-between items-start sm:items-center">
          <div>
            <h1 className="text-lg capitalize font-bold">{task?.title}</h1>
            <p className={`text-xs ${task?.completed ? "text-green-600" : "text-red-600"}`}>
              {task?.completed
                ? "You Complete This Task Successfully"
                : "You Must Complete Your Task"}
            </p>
          </div>
          <div className="flex justify-between items-center mt-5 w-full sm:w-auto sm:mt-0">
            <ButtonKit
              loading={isLoading}
              loadingVariants="justSpinner"
              variant="error"
              onClick={onDeleteTask}
              extraClasses="w-5/12 sm:w-auto mr-5"
            >
              Delete
            </ButtonKit>
            <ButtonKit
              loading={isLoading}
              loadingVariants="justSpinner"
              variant="primary"
              href={`${linksPath.EditTask}/${task?.id}`}
              extraClasses="w-5/12 sm:w-auto "
            >
              Update
            </ButtonKit>
          </div>
        </div>
        <p className="text-sm text-gray-600">{task?.description}</p>
      </div>
      <RelatedTask currentTaskId={paramsId} />
    </>
  );
};

export default TaskDetailPage;

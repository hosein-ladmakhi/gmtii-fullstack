import zod from "zod";
import { TFormItem } from "../../../types";

export const createOrEditTaskFormSchema = zod.object({
  title: zod
    .string({ required_error: "You must provide your title" })
    .min(3, "Your title must at least contain 3 character"),
  description: zod
    .string({ required_error: "You must provide your description" })
    .min(3, "Your description must at least contain 3 character"),
  completed: zod.boolean().optional(),
});

export const createOrEditFormInputs: TFormItem[] = [
  { label: "Title", placeholder: "Enter Your Title", name: "title", variant: "text" },
  {
    label: "Description",
    placeholder: "Enter Your Description",
    name: "description",
    variant: "textarea",
  },
  {
    label: "Is Complete Your Task ?",
    name: "completed",
    variant: "checkbox",
  },
];

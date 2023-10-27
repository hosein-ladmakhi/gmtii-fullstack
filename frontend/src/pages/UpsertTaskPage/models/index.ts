import zod from "zod";
import { createOrEditTaskFormSchema } from "../constants";

export type TCreateOrEditTaskSchema = zod.infer<typeof createOrEditTaskFormSchema>;

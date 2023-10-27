import { FC } from "react";

const TaskListEmpty: FC = () => {
  return (
    <div className="my-6 h-20 w-full flex  rounded-lg justify-center items-center bg-blue-800 text-white">
      <h1 className="font-bold text-sm sm:text-lg"> Task List Is Empty, Please Create New Task</h1>
    </div>
  );
};

export default TaskListEmpty;

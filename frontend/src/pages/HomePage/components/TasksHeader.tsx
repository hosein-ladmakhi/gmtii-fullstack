import { Link } from "react-router-dom";
import { routesPath } from "../../../routes/path";
import { useFetchTasksQuery } from "../../../features/tasks";

const TasksHeader = () => {
  const { isLoading, data: tasks } = useFetchTasksQuery();
  if (isLoading) return <p>Task Header Loading ...</p>;
  return (
    <div className="flex justify-between items-start sm:items-center flex-col sm:flex-row">
      <h1 className="font-bold text-gray-600 text-sm sm:text-lg capitalize">
        This is some tasks that you should do it
      </h1>
      <Link
        to={routesPath.CreateTask}
        className="bg-blue-900 text-white w-max text-center sm:text-sm text-xs px-3 mt-4 sm:mt-0 py-2 sm:px-5 rounded hover:bg-blue-600 transition relative"
      >
        <div className="h-8 w-8 rounded-full bg-red-500 flex justify-center items-center absolute -top-4 -right-3">
          {tasks?.length}
        </div>
        Create New Task
      </Link>
    </div>
  );
};

export default TasksHeader;

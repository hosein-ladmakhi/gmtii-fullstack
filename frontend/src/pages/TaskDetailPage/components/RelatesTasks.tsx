import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useRelatedTaskQuery } from "../../../features/tasks";
import { linksPath } from "../../../routes/path";

interface IProps {
  currentTaskId: number;
}

const RelatedTask: FC<IProps> = ({ currentTaskId }) => {
  const { data: tasks, isLoading } = useRelatedTaskQuery(currentTaskId);

  if (isLoading) return <p>Loading ...</p>;

  if (!tasks.length) return <></>;

  return (
    <div className="mt-10 shadow-lg p-5 border-2 border-gray-100">
      <h1 className="mb-5 font-bold text-lg">Related Tasks</h1>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {React.Children.toArray(
          tasks.map((task: any) => (
            <li className="border-2 border-gray-100 shadow-lg p-5 rounded-lg">
              <h1 className="overflow-hidden text-ellipsis line-clamp-1 font-bold capitalize text-base">
                {task.title}
              </h1>
              <p className="overflow-hidden text-ellipsis line-clamp-3 text-sm text-gray-600">
                {task.description}
              </p>
              <Link
                to={`${linksPath.Tasks}/${task.id}`}
                className="bg-blue-900 text-white text-sm py-2 px-5 rounded hover:bg-blue-600 transition mt-5 inline-block ml-auto"
              >
                Show More
              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default RelatedTask;

import TasksList from "./components/TaskList";
import TasksHeader from "./components/TasksHeader";

function HomePage() {
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-gray-600 font-bold text-sm sm:text-lg">Welcome to home page</h1>
        <p className="text-gray-600 text-xs sm:text-base">
          This application is simple task manager that implemented as testing application
        </p>
      </div>

      <div>
        <TasksHeader />
        <TasksList />
      </div>
    </div>
  );
}

export default HomePage;

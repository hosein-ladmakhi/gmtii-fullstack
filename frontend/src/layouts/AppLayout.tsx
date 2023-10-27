import { Suspense } from "react";
import { Outlet } from "react-router";
import { Navbar } from "../common/components";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<p>Loading ...</p>}>
        <div className="container mx-auto px-5 sm:px-0 my-5">
          <Outlet />
        </div>
      </Suspense>
    </>
  );
};

export default AppLayout;

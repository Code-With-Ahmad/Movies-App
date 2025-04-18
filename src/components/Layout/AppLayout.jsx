import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import Loading from "../Loading";
import { Suspense } from "react";

const AppLayout = () => {
  const location = useLocation();
  const isLoading = location.state?.isLoading;

  return (
    <div className="overflow-hidden max-w-screen">
      <Header />
      <Suspense fallback={isLoading ? <Loading /> : null}>
        <div className="min-h-[70vh]">
          <Outlet />
        </div>
      </Suspense>
      <Footer />
    </div>
  );
};

export default AppLayout;

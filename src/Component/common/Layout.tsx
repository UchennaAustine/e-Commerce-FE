import { Outlet } from "react-router-dom";
import MainSider from "../static/MainSider";
import { useDispatch, useSelector } from "react-redux";

const Layout = () => {
  const toggle = useSelector((state: any) => state.toggleState);
  return (
    <div className="flex">
      <MainSider />
      <div className="w-[100vw] flex justify-end">
        <div
          className={`w-[${
            toggle ? "calc(100vw-70px)" : "calc(100vw-150px)"
          }] pl-2`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;

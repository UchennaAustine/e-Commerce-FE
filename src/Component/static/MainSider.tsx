import {
  BsLayoutSidebarInset,
  BsLayoutSidebarInsetReverse,
} from "react-icons/bs";
import { BiHomeSmile, BiCartAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { changeState } from "../../global/globalstate";
import { NavLink } from "react-router-dom";
const MainSider = () => {
  const dispatch = useDispatch();
  const toggle = useSelector((state: any) => state.toggleState);
  const onChangeState = () => {
    dispatch(changeState(!toggle));
  };

  return (
    <div>
      <div
        className={`w-[${
          toggle ? "70px" : "150px"
        }] h-[100vh] fixed overflow-hidden bg-purple-100 transition-all duration-300`}
      >
        <div className="w-full justify-center flex mt-8">
          {toggle ? (
            <BsLayoutSidebarInsetReverse
              className="text-[25px] text-purple-900 hover:scale-[1.04] hover:cursor-pointer transition-all duration-300"
              onClick={onChangeState}
            />
          ) : (
            <BsLayoutSidebarInset
              className="text-[25px] text-purple-900 hover:scale-[1.04] hover:cursor-pointer transition-all duration-300"
              onClick={onChangeState}
            />
          )}
        </div>
        <br />
        <br />
        <br />
        <br />
        <NavLink to="/">
          <div>
            <div className="flex px-4 hover:bg-slate-200 py-2  hover:cursor-pointer transition-all duration-300 text-purple-900">
              <div>
                <BiHomeSmile className="text-[30px]  mr-2" />
              </div>
              {!toggle && <div>Home</div>}
            </div>
          </div>
        </NavLink>

        <br />

        <NavLink
          to="/check-out"
          // className={({isActive}) =>{isActive ? "text-[red]" : "text-[silver]"}}
        >
          <div>
            <div className="flex px-4 hover:bg-slate-200 py-2  hover:cursor-pointer transition-all duration-300 text-purple-900">
              <div className="relative">
                <div className="absolute w-[16px] h-[16px] justify-center items-center text-[12px] rounded-[50%] bg-red-500 right-1 flex ">
                  1
                </div>
                <BiCartAlt className="text-[30px]  mr-2" />
              </div>
              {!toggle && <div>Cart</div>}
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default MainSider;

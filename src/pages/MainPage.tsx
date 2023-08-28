import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineVisibility } from "react-icons/md";

const MainPage = () => {
  const star: any = [];
  const stars: any = [];

  const name = Array.from({ length: 5 }, () => {
    const randNumb = (max: number, min: number) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    for (let i = 1; i <= randNumb(1, 0); i++) {
      star.push("⭐");
    }
    stars.push(star.join(""));
  });
  console.log(stars);
  console.log(name);
  return (
    <div>
      <div>
        <div className="w-[250px] h-[300px] relative">
          <img className="w-[250px] h-[300px] bg-green-400 object-cover" />
          <div className="w-full h-[300px] flex justify-center absolute opacity-0 hover:opacity-100 items-end bottom-3">
            <div className="w-[30px]  h-[30px] rounded-[50%] bg-white ml-3 flex justify-center items-center hover:text-white hover:bg-[silver] hover:cursor-pointer duration-300 transition-all ">
              <MdOutlineVisibility />
            </div>
            <div className="w-[30px]  h-[30px] rounded-[50%] bg-white ml-3 flex justify-center items-center hover:text-white hover:bg-[silver] hover:cursor-pointer duration-300 transition-all ">
              <FiShoppingBag />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-[250px]">
          {stars[3]} <span className="text-[12px]">(review)</span> {""}
        </div>
        <div>name</div>
        <div className=" flex items-center justify-center w-[250px] text-[silver] ">
          <div className="line-through mr-2">#2,000</div>
          <div className="text-[red]">#3,000</div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;

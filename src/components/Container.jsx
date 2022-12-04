import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiRefresh } from "react-icons/bi";
import divWeb from "../assets/divWeb.svg";
import divMob from "../assets/divMob.svg";

export default function Container() {
  const [advice, setAdvice] = useState(null);
  const [id, setId] = useState(null);

  const getAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        setAdvice(response.data.slip.advice);
        setId(response.data.slip.id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        setAdvice(response.data.slip.advice);
        setId(response.data.slip.id);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex items-center ">
      <div className="bg-darkGray drop-shadow-2xl px-[50px] mx-auto pt-[20px] w-[calc(100%_-_2rem)] relative max-w-xl rounded-s shadow-2xl flex flex-col justify-center items-center text-center">
        <p className="text-neon text-[15px]">ADVICE #{id}</p>
        <q className="text-primary text-[25px] py-[17px] font-bold ">
          {advice}
        </q>

        <div className=" mt-4 mb-8 text-lightGray">
          <img class="lg:hidden " src={divWeb} alt="divider" />
          <img class="sm:hidden lg:block" src={divMob} alt="divider" />
        </div>
        <button
          onClick={getAdvice}
          className="bg-neon text-darkGray text-[30px] shadow-xl px-2 py-2 rounded-full inline-block -mb-[20px] "
        >
          <BiRefresh />
        </button>
      </div>
    </div>
  );
}

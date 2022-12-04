import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiPause, BiRefresh } from "react-icons/bi";

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
    <div className="flex ">
      <div className="bg-darkGray drop-shadow-2xl px-[50px] pt-[20px] relative max-w-lg rounded-lg shadow-lg flex flex-col justify-center items-center text-center">
        <p className="text-neon text-[15px]">ADVICE #{id}</p>
        <q className="text-primary text-[25px] py-[17px] font-bold ">{advice}</q>
        
        <div className="flex justify-center items-center pb-3">
          <p className="text-lightGray ">-------------------</p>
            <BiPause className="text-primary mx-2 text-xl"/>
            <p className="text-lightGray ">-------------------</p>
        </div>
        <button
          onClick={getAdvice}
          className="bg-neon text-darkGray text-[30px] px-2 py-2 rounded-full inline-block -mb-[20px] "
        >
          <BiRefresh />
        </button>
      </div>
    </div>
  );
}
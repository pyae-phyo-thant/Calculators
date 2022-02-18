import React, { useState } from "react";

import Layout from "../components/Layout";

const InterestCompound = () => {
  const [originMoney, setOriginMoney] = useState(100000);
  const [aToe, setAToe] = useState(8);
  const [aToeSelect, setAToeSelect] = useState("year");
  const [aToeDuration, setAToeDuration] = useState(1);
  const [aToeDurationSelect, setAToeDurationSelect] = useState("year");

  const [totalAToe, setTotalAToe] = useState("");

  const handleCal = () => {
    if (
      aToeSelect &&
      aToeDurationSelect === "year" &&
      aToeSelect &&
      aToeDurationSelect === "month" &&
      aToeSelect &&
      aToeDurationSelect === "week" &&
      aToeSelect &&
      aToeDurationSelect === "day"
    ) {
      const mtotalAToe = (parseInt(originMoney) * aToe) / 100;

      const result = mtotalAToe * aToeDuration;
      console.log(result, "year");
    } else if (aToeSelect === "month" && aToeDurationSelect === "week") {
      const mtotalAToe = (parseInt(originMoney) * aToe) / 100;

      const result = mtotalAToe * aToeDuration;
      console.log(result, "year");
    }
  };

  return (
    <Layout>
      <h3 className="text-xl text-center font-semibold mt-2 text-blue-500">
        ရိုးရိုးအတိုး တွက်စက်
      </h3>
      <div className="border border-green-500 shadow-md mt-6 px-6 py-10 rounded-lg">
        <div className="grid md:grid-cols-6 grid-cols-1 gap-0">
          <div className="mb-4 md:mb-0">
            <label>ငွေရင်းပမာဏ:</label> <br />
            <input
              type="text"
              value={originMoney}
              onChange={(e) => setOriginMoney(e.target.value)}
              placeholder="ငွေရင်းပမာဏ ထည့်ပါ"
              className="border mt-1 border-yellow-500 px-1 py-1 ml-1 rounded-md text-base font-semibold"
            />
          </div>
          <div className="mb-4 md:mb-0 md:col-span-2 md:ml-[27px]">
            <label>အတိုးနှုန်း (%):</label>
            <br />
            <input
              type="number"
              value={aToe}
              onChange={(e) => setAToe(e.target.value)}
              className="border mt-1 border-yellow-500 px-1 py-1 ml-1 rounded-md text-base font-semibold"
            />
            <select
              value={aToeSelect}
              onChange={(e) => setAToeSelect(e.target.value)}
              className="bg-green-500 px-1 py-2 rounded-md ml-1"
            >
              <option value="year">နှစ်တိုး</option>
              <option value="month">လတိုး</option>
              <option value="week">ရက်သတ္တပတ်တိုး</option>
              <option value="day">နေ့တိုး</option>
            </select>
          </div>
          <div className="mb-4 md:mb-0 md:col-span-2">
            <label>ကြာချိန်:</label>
            <br />
            <input
              type="number"
              value={aToeDuration}
              onChange={(e) => setAToeDuration(e.target.value)}
              className="border mt-1 border-yellow-500 px-1 py-1 ml-1 rounded-md text-base font-semibold"
            />
            <select
              value={aToeDurationSelect}
              onChange={(e) => setAToeDurationSelect(e.target.value)}
              className="bg-green-500 px-1 py-2 rounded-md ml-1"
            >
              <option value="year">နှစ်တိုး</option>
              <option value="month">လတိုး</option>
              <option value="week">ရက်သတ္တပတ်တိုး</option>
              <option value="day">နေ့တိုး</option>
            </select>
          </div>
          <div>
            <br />
            <button
              onClick={handleCal}
              className="bg-green-500 px-6 py-1 float-right text-white rounded-md hover:bg-green-700"
            >
              တွက်ရန်
            </button>
          </div>
        </div>
        <h3 className="text-center font-semibold text-lg">
          စုဖို့လိုအပ်သော ပမာဏ
        </h3>
        <h3 className="text-center font-bold text-xl">{totalAToe}</h3>
      </div>
    </Layout>
  );
};

export default InterestCompound;

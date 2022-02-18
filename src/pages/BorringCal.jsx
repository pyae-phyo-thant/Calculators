import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";

const BorringCal = () => {
  const [monthIncome, setMonthIncome] = useState(0);
  const [monthBorrow, setMonthBorrow] = useState(0);
  const [totalRatio, setTotalRatio] = useState(0.0);

  const [colors, setColors] = useState({
    green: false,
    moreGreen: false,
    yellow: false,
    red: false,
  });

  const handleCal = () => {
    const mPercent = monthBorrow / monthIncome;

    setTotalRatio(mPercent * 100);
  };

  useEffect(() => {
    if (totalRatio <= 20) {
      setColors({
        green: true,
        moreGreen: false,
        yellow: false,
        red: false,
      });
    } else if (totalRatio >= 20 && totalRatio < 33) {
      setColors({
        green: false,
        moreGreen: true,
        yellow: false,
        red: false,
      });
    } else if (totalRatio >= 33 && totalRatio <= 50) {
      setColors({
        green: false,
        moreGreen: false,
        yellow: true,
        red: false,
      });
    } else {
      setColors({
        green: false,
        moreGreen: false,
        yellow: false,
        red: true,
      });
    }
  }, [totalRatio]);
  console.log(colors.yellow);
  return (
    <Layout>
      <h3 className="text-xl text-center font-semibold mt-2 text-blue-500">
        အကြွေး - ဝင်ငွေအချိူး တွက်စက်
      </h3>
      <div className="border border-green-500 shadow-md mt-6 px-6 py-10 rounded-lg">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-0">
          <div className="mb-4 md:mb-0">
            <label>လစဉ်ဝင်ငွေ:</label>
            <input
              type="number"
              value={monthIncome}
              onChange={(e) => setMonthIncome(e.target.value)}
              placeholder="စုစုပေါင်းလစဉ်ဝင်ငွေ ထည့်ပါ"
              className="border mt-1 border-yellow-500 px-5 py-1 ml-1 rounded-md text-base font-semibold"
            />
          </div>
          <div className="mb-4 md:mb-0">
            <label>လစဉ်ပြန်ဆပ်ငွေ:</label>
            <input
              type="number"
              value={monthBorrow}
              onChange={(e) => setMonthBorrow(e.target.value)}
              placeholder="စုစုပေါင်းလစဉ်ပြန်ဆပ်ငွေ ထည့်ပါ"
              className="border mt-1 border-yellow-500 px-5 py-1 ml-1 rounded-md text-base font-semibold"
            />
          </div>
          <div>
            <button
              onClick={handleCal}
              className="bg-green-500 px-6 py-1 float-right text-white rounded-md hover:bg-green-700"
            >
              တွက်ရန်
            </button>
          </div>
        </div>
        <div className="text-center mt-4 ">
          <h4 className="text-xl font-semibold">
            သင့်ရဲ့ အကြွေး - ဝင်ငွေအချိူး{" "}
          </h4>
          <h3 className="text-lg my-2 font-bold">{totalRatio}%</h3>
        </div>
        <div className="md:w-[40%] m-auto grid md:grid-cols-4 grid-cols-2">
          <div className={colors.green ? "text-green-600" : "text-gray-400"}>
            နည်း
          </div>
          <div
            className={colors.moreGreen ? "text-green-500" : "text-gray-400"}
          >
            အဆင်ပြေ
          </div>
          <div className={colors.yellow ? "text-yellow-500" : "text-gray-400"}>
            များ
          </div>
          <div className={colors.red ? "text-red-500" : "text-gray-400"}>
            အလွန်များ
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BorringCal;

import React, { useState } from "react";

import Layout from "../components/Layout";

const SaveGoal = () => {
  const [monthIncome, setMonthIncome] = useState("");
  const [selectValue, setSelectValue] = useState("year");
  const [saveGoal, setSaveGoal] = useState("");
  const [saveMonth, setSaveMonth] = useState(0);
  const [saveWeek, setSaveWeek] = useState(0);
  const [saveDay, setSaveDay] = useState(0);

  const handleCal = () => {
    if (selectValue === "year") {
      const mMonth = monthIncome / (12 * saveGoal);
      const mWeek = monthIncome / 52; //One year 52 week
      const mDay = mWeek / 7;

      setSaveDay(Math.round(mDay));
      setSaveWeek(Math.round(mWeek));
      setSaveMonth(Math.round(mMonth));
    } else {
      const mMonth = monthIncome / saveGoal;
      const mWeek = mMonth / 4;
      const mDay = mWeek / 7;
      setSaveDay(Math.round(mDay));
      setSaveMonth(Math.round(mMonth));
      setSaveWeek(Math.round(mWeek));
      setSaveMonth(Math.round(mMonth));
    }
  };
  return (
    <Layout>
      <h3 className="text-xl text-center font-semibold mt-2 text-blue-500">
        စုငွေ ရည်မှန်းချက် တွက်စက်
      </h3>
      <div className="border border-green-500 shadow-md mt-6 px-6 py-10 rounded-lg">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-0">
          <div className="mb-4 md:mb-0">
            <label>လစဉ်ဝင်ငွေ:</label>
            <input
              type="text"
              value={monthIncome}
              onChange={(e) => setMonthIncome(e.target.value)}
              placeholder="လစဉ်ဝင်ငွေ ထည့်ပါ"
              className="border mt-1 border-yellow-500 px-5 py-1 ml-1 rounded-md text-base font-semibold"
            />
          </div>
          <div className="mb-4 md:mb-0">
            <label>ပြည့်ချင်သော နေ့ရက်:</label>
            <input
              type="number"
              value={saveGoal}
              onChange={(e) => setSaveGoal(e.target.value)}
              placeholder="လစဉ်ဝင်ငွေ ထည့်ပါ"
              className="border mt-1 border-yellow-500 px-2 py-1 ml-1 rounded-md text-base font-semibold"
            />
            <select
              value={selectValue}
              onChange={(e) => setSelectValue(e.target.value)}
              className="bg-green-500 px-1 py-2 rounded-md ml-1"
            >
              <option value="year">နှစ်</option>
              <option value="month">လ</option>
            </select>
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
        <h3 className="text-center font-semibold text-xl">
          စုဖို့လိုအပ်သော ပမာဏ
        </h3>
        <div className="md:w-[56%] mt-4 grid md:grid-cols-3 grid-cols-2 m-auto">
          <div>
            <h3>တစ်လလျှင်</h3>
            <h2 className="font-bold">{saveMonth}</h2>
          </div>
          <div>
            <h3>တစ်ပတ်လျှင်</h3>
            <h2 className="font-bold">{saveWeek}</h2>
          </div>
          <div>
            <h3>တစ်နေ့လျှင်</h3>
            <h2 className="font-bold">{saveDay}</h2>
          </div>
        </div>
        <h3 className="font-semibold text-xs text-red-500">
          မှတ်ချက်။ ။တွက်ချက်ရ လွယ်ကူစေရန် တစ်နှစ်လျှင် ၅၂ပတ်၊ တစ်လလျှင် ရက်၃၀၊
          တစ်ပတ်လျှင် ၇ရက်ဖြင့် တွက်ချက်ထားသည်။
        </h3>
      </div>
    </Layout>
  );
};

export default SaveGoal;

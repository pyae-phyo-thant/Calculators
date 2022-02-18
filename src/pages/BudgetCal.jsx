import React, { useState } from "react";
import { Range } from "react-range";

import Layout from "../components/Layout";

const BudgetCal = () => {
  const [monthIncome, setMonthIncome] = useState("");
  const [saveMoney, setSaveMoney] = useState([0.2]);
  const [monthSave, setMonthSave] = useState(0);
  const [leftAfterSave, setLeftAfterSave] = useState(0);
  const [weekSpend, setWeekSpend] = useState(0);
  const [daySpend, setDaySpend] = useState(0);

  const handleCal = () => {
    const mAfterSave = monthIncome - (monthIncome * saveMoney) / 100;
    const mSave = monthIncome - mAfterSave;
    const mWeek = mAfterSave / 7;
    const mDay = mWeek / 7;

    setDaySpend(Math.round(mDay));
    setWeekSpend(Math.round(mWeek));
    setMonthSave(mSave);
    setLeftAfterSave(mAfterSave);
  };

  return (
    <Layout>
      <h3 className="text-xl text-center font-semibold mt-2 text-blue-500">
        ရသုံးငွေစာရင်းဆိုင်ရာ တွက်စက်
      </h3>
      <div className="border border-green-500 shadow-md mt-6 px-6 py-10 rounded-lg">
        <div className="grid md:grid-cols-4 grid-cols-1 gap-0">
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
          <div className="col-span-2">
            <label>စုလိုသည့် စုငွေ (%):</label>
            <Range
              step={0.1}
              min={0}
              max={100}
              values={saveMoney}
              onChange={(values) => setSaveMoney(values)}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "6px",
                    width: "100%",
                    marginTop: "10px",
                    backgroundColor: "rgb(34 197 94)",
                  }}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "20px",
                    width: "20px",
                    backgroundColor: "rgb(34 197 94)",
                  }}
                />
              )}
            />
            <br />
            <h3 className="text-yellow-500">{saveMoney}%</h3>
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
        <div className="md:w-[56%] mt-4 grid md:grid-cols-4 grid-cols-2 m-auto">
          <div>
            <h3>တစ်လ စုငွေ</h3>
            <h2 className="font-bold">{monthSave}</h2>
          </div>
          <div>
            <h3>စုငွေနှုတ်ပြီး ကျန်ငွေ</h3>
            <h2 className="font-bold">{leftAfterSave}</h2>
          </div>
          <div>
            <h3>တစ်ပတ်အသုံးစရိတ်</h3>
            <h2 className="font-bold">{weekSpend}</h2>
          </div>
          <div>
            <h3>တစ်ရက်အသုံးစရိတ်</h3>
            <h2 className="font-bold">{daySpend}</h2>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BudgetCal;

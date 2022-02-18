import React, { useState } from "react";

import Layout from "../components/Layout";

const ThreeRule = () => {
  const [monthIncome, setMonthIncome] = useState("");
  const [needed, setNeeded] = useState(0.0);
  const [wanted, setWanted] = useState(0.0);
  const [saving, setSaving] = useState(0.0);

  const handleCal = () => {
    const mNeed = monthIncome - (monthIncome * 50) / 100;
    const mWant = monthIncome - (monthIncome * 70) / 100;
    const mSave = monthIncome - (monthIncome * 80) / 100;

    setNeeded(mNeed);
    setWanted(mWant);
    setSaving(mSave);
  };
  return (
    <Layout>
      <h3 className="text-xl text-center font-semibold mt-2 text-blue-500">
        ၅၀-၃၀-၂၀ စည်းမျဉ်းတွက်စက်
      </h3>
      <div className="border border-green-500 shadow-md mt-6 px-6 py-10 rounded-lg">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-0">
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
          ခွဲဝေသတ်မှတ်နိုင်တဲ့ ပမာဏ
        </h3>
        <div className="md:w-[56%] mt-4 grid md:grid-cols-3 grid-cols-2 m-auto">
          <div>
            <h3>လိုအပ်ချက်အတွက် (၅၀%)</h3>
            <h2 className="font-bold">{needed}</h2>
          </div>
          <div>
            <h3>လိုချင်တာအတွက် (၃၀%)</h3>
            <h2 className="font-bold">{wanted}</h2>
          </div>
          <div>
            <h3>စုဆောင်းငွေအတွက် (၂၀%)</h3>
            <h2 className="font-bold">{saving}</h2>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ThreeRule;

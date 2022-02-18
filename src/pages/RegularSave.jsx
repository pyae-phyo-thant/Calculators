import React, { useState } from "react";
import { Range } from "react-range";

import Layout from "../components/Layout";

const RegularSave = () => {
  const [selectValue, setSelectValue] = useState("year");
  const [saveMoney, setSaveMoney] = useState([50000]);
  const [howlong, setHowlong] = useState([10]);
  const [totalSave, setTotalSave] = useState(0);
  const [bankSave, setBankSave] = useState(0);

  const handleCal = () => {
    const mTotal = saveMoney * 12 * howlong;
    let mBank = [];

    let sumLoop = parseInt(saveMoney);

    for (let index = 1; index <= howlong; index++) {
      sumLoop = sumLoop + (parseInt(saveMoney) * 6) / 100;

      console.log(sumLoop);
    }

    console.log(sumLoop);
    setTotalSave(Math.round(mTotal).toLocaleString());
    console.log(mBank);
  };

  return (
    <Layout>
      <h3 className="text-xl text-center font-semibold mt-2 text-blue-500">
        ရသုံးငွေစာရင်းဆိုင်ရာ တွက်စက်
      </h3>
      <div className="border border-green-500 shadow-md mt-6 px-6 py-10 rounded-lg">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
          <div className="mb-4 md:mb-0">
            <label>စုလိုသည့် ပမာဏ:</label>
            <select
              value={selectValue}
              onChange={(e) => setSelectValue(e.target.value)}
              className="bg-green-500 px-1 py-2 rounded-md ml-1"
            >
              <option value="month">၁ လ</option>
              <option value="week">၁ ပတ်</option>
              <option value="day">၁ ရက်</option>
            </select>
            <br />
            <Range
              step={50000}
              min={50000}
              max={2000000}
              values={saveMoney}
              onChange={(values) => setSaveMoney(values)}
              renderTrack={({ props, children }) => (
                <div className="w-full bg-gray-100">
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
            <h3 className="text-yellow-500">{saveMoney}</h3>
          </div>
          <div className="mb-4 md:mb-0">
            <label>စုချင်သောအချိန်:</label>
            <select
              value={selectValue}
              onChange={(e) => setSelectValue(e.target.value)}
              className="bg-green-500 px-1 py-2 rounded-md ml-1"
            >
              <option value="year">နှစ်</option>
              <option value="month">လ</option>
            </select>
            <br />
            <Range
              step={5}
              min={5}
              max={50}
              values={howlong}
              onChange={(values) => setHowlong(values)}
              renderTrack={({ props, children }) => (
                <div className="w-full bg-gray-100">
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
            <h3 className="text-yellow-500">{howlong}</h3>
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
        <div className="md:w-[56%] mt-4 grid md:grid-cols-2 grid-cols-2 m-auto">
          <div>
            <h3>စုမိမယ့် ပမာဏ</h3>
            <h2 className="font-bold">{totalSave}</h2>
          </div>
          <div>
            <h3>
              ငွေစုဘဏ်ထဲမှာ စုမယ်ဆိုရင် တစ်နှစ်အတိုးနှုန်း ၆% နဲ့ပေါင်းပြီး
              စုမိမယ့် ပမာဏ
            </h3>
            <h2 className="font-bold">{bankSave}</h2>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RegularSave;

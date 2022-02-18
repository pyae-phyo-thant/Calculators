import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card/Card";
import Layout from "../components/Layout";

import { BsCalculator, BsPercent } from "react-icons/bs";
import { FaChartPie } from "react-icons/fa";
import { GiTargetShot } from "react-icons/gi";
import { MdOutlineSavings } from "react-icons/md";
import { AiOutlineDashboard } from "react-icons/ai";

const Home = () => {
  return (
    <Layout>
      <div className="md:w-[90%] m-auto">
        <h3 className="text-xl text-center font-semibold mt-2 text-blue-500">
          ရသုံးငွေစာရင်းဆိုင်ရာ တွက်စက်များ
        </h3>
        <div className="grid md:grid-cols-5 grid-cols-2 mt-4 md:gap-5 gap-4">
          <Link to="/budget-calculator">
            <Card
              cardTitle={"ရသုံးငွေစာရင်း တွက်စက်"}
              cardIcon={<BsCalculator className="mt-2 text-red-500 mr-1" />}
            />
          </Link>
          <Link to="/50-30-20-rule">
            <Card
              cardTitle={"၅၀-၃၀-၂၀ စည်းမျဉ်း တွက်စက်"}
              cardIcon={<FaChartPie className="mt-2 text-green-500 mr-1" />}
            />
          </Link>
          <Link to="/save-goal">
            <Card
              cardTitle={"စုငွေရည်မှန်းချက် တွက်စက်"}
              cardIcon={<GiTargetShot className="mt-2 text-blue-500 mr-1" />}
            />
          </Link>
          <Link to="/regular-save">
            <Card
              cardTitle={"ပုံမှန်စုငွေ တွက်စက်"}
              cardIcon={
                <MdOutlineSavings className="mt-2 text-yellow-500 mr-1" />
              }
            />
          </Link>
          <Link to="/borrowing-income-ratio">
            <Card
              cardTitle={"အကြွေး - ဝင်ငွေအချိူး တွက်စက်"}
              cardIcon={
                <AiOutlineDashboard className="mt-2 text-purple-500 mr-1" />
              }
            />
          </Link>
        </div>
        <br />
        <h3 className="text-xl text-center font-semibold mt-2 text-blue-500">
          အတိုး တွက်စက်များ
        </h3>
        <div className="grid md:grid-cols-3 grid-cols-2 mt-4 md:gap-5 gap-4">
          <Link to="/simple-interest-compound">
            <Card
              cardTitle={"ရိုးရိုးအတိုး တွက်စက်"}
              cardIcon={<BsPercent className="mt-2 text-red-500 mr-1" />}
            />
          </Link>
          <Link to="/">
            <Card
              cardTitle={"တိုးရင်းပေါင်း အတိုးတွက်စက်"}
              cardIcon={<BsPercent className="mt-2 text-green-500 mr-1" />}
            />
          </Link>
          <Link to="/">
            <Card
              cardTitle={"နှစ်စဉ်သက်ရောက် အတိုးတွက်စက်"}
              cardIcon={<BsPercent className="mt-2 text-blue-500 mr-1" />}
            />
          </Link>
          <Link to="/">
            <Card
              cardTitle={"Flat Method နှင့် Amortization Method တွက်စက်"}
              cardIcon={<BsPercent className="mt-2 text-yellow-500 mr-1" />}
            />
          </Link>
          <Link to="/">
            <Card
              cardTitle={"ငွေစု bank အပ်ငွေ အတိုးတွက်စက်"}
              cardIcon={
                <MdOutlineSavings className="mt-2 text-purple-500 mr-1" />
              }
            />
          </Link>
          <Link to="/">
            <Card
              cardTitle={"စာရင်းသေ အတိုးတွက်စက်"}
              cardIcon={
                <MdOutlineSavings className="mt-2 text-purple-500 mr-1" />
              }
            />
          </Link>
        </div>
        <br />
        <h3 className="text-xl text-center font-semibold mt-2 text-blue-500">
          ရသုံးငွေစာရင်းဆိုင်ရာ တွက်စက်များ
        </h3>
        <div className="grid md:grid-cols-3 grid-cols-2 mt-4 md:gap-5 gap-4">
          <Link to="/">
            <Card
              cardTitle={"ရသုံးငွေစာရင်း တွက်စက်"}
              cardIcon={<BsCalculator className="mt-2 text-red-500 mr-1" />}
            />
          </Link>
          <Link to="/">
            <Card
              cardTitle={"၅၀-၃၀-၂၀ စည်းမျဉ်း တွက်စက်"}
              cardIcon={<FaChartPie className="mt-2 text-green-500 mr-1" />}
            />
          </Link>
          <Link to="/">
            <Card
              cardTitle={"စုငွေရည်မှန်းချက် တွက်စက်"}
              cardIcon={<GiTargetShot className="mt-2 text-blue-500 mr-1" />}
            />
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

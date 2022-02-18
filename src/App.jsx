import { BrowserRouter, Routes, Route } from "react-router-dom";
import BorringCal from "./pages/BorringCal";
import BudgetCal from "./pages/BudgetCal";
import Home from "./pages/Home";
import InterestCompound from "./pages/InterestCompound";
import RegularSave from "./pages/RegularSave";
import SaveGoal from "./pages/SaveGoal";
import ThreeRule from "./pages/ThreeRule";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/budget-calculator" exact element={<BudgetCal />} />
        <Route path="/50-30-20-rule" exact element={<ThreeRule />} />
        <Route path="/save-goal" exact element={<SaveGoal />} />
        <Route path="/regular-save" exact element={<RegularSave />} />
        <Route path="/borrowing-income-ratio" exact element={<BorringCal />} />
        <Route
          path="/simple-interest-compound"
          exact
          element={<InterestCompound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

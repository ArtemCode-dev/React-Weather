import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/components/Home";
import MonthStatistics from "./pages/MonthStatistics/components/MonthStatistics";
import Header from "./pages/shared/Header/Header";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path = '/' exact element = {<Home />} />
        <Route path = '/month-statistics' exact element = {<MonthStatistics />} />
      </Routes>
    </div>
  );
}

export default App;

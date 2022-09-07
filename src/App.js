import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/components/Home";
import MonthStatistics from "./pages/MonthStatistics/components/MonthStatistics";
import Header from "./pages/shared/Header/Header";
import Popup from "./pages/shared/Popup/Popup";

function App() {

  const popUpStatus = useSelector(state => state.weekPanel.popUpStatus);
  return (
    <>
      {popUpStatus ? <Popup /> : <></>}
      <div className="container">
        <Header />
        <Routes>
          <Route path = '/' exact element = {<Home />} />
          <Route path = '/month-statistics' exact element = {<MonthStatistics />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

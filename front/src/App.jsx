// Libraries
import { Route, Redirect } from "react-router-dom";

// HOC
import HomeHOC from "./HOC/Home.HOC";
import DashboardHOC from "./HOC/Dashboard.HOC";

// Pages
import HomePage from "./Components/pages/Home.page";
import DashboardPage from "./Components/pages/Patient.Dashboard.page";
import DoctorDashboardHOC from "./HOC/Doctor.Dashboard.HOC";
import DoctorDashboardPage from "./Components/pages/Doctor.Dashboard";

function App() {
  return (
    <>
    <Route path="/" exact>
      <Redirect to="/home"/>
    </Route>
      <HomeHOC path="/home" exact component={HomePage} />
      <DashboardHOC path="/padash" exact component={DashboardPage}/>
      <DoctorDashboardHOC path="/docdash" exact component={DoctorDashboardPage}/>
    </>
  );
}

export default App;

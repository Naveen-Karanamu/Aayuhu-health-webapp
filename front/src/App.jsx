// Libraries
import { Route, Redirect } from "react-router-dom";

// HOC
import HomeHOC from "./HOC/Home.HOC";
import DashboardHOC from "./HOC/Patient.Dashboard.HOC";
import RequestHOC from "./HOC/Request.HOC";

// Pages
import HomePage from "./Components/pages/Home.page";
import DashboardPage from "./Components/pages/Patient.Dashboard.page";
import DoctorDashboardHOC from "./HOC/Doctor.Dashboard.HOC";
import DoctorDashboardPage from "./Components/pages/Doctor.Dashboard";
import Requestpage from "./Components/pages/Request.page";
import PastRequests from "./Components/pages/Requests/Past.Requests";
import UpcomingRequests from "./Components/pages/Requests/Upcoming.Requests";
import RequestsRequests from "./Components/pages/Requests/Requests.Requests";

function App() {
  return (
    <>
    <Route path="/" exact>
      <Redirect to="/home"/>
    </Route>
      <HomeHOC path="/home" exact component={HomePage} />
      <DashboardHOC path="/padash/:id" exact component={DashboardPage}/>
      <DoctorDashboardHOC path="/docdash/:id" exact component={DoctorDashboardPage}/>
      <RequestHOC path="/request/:id/past" exact component={PastRequests}/>
      <RequestHOC path="/request/:id/upcoming" exact component={UpcomingRequests}/>
      <RequestHOC path="/request/:id/requests" exact component={RequestsRequests}/>
    </>
  );
}

export default App;

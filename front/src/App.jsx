// HOC
import HomeHOC from "./HOC/Home.HOC";
import DashboardHOC from "./HOC/Dashboard.HOC";

// Pages
import HomePage from "./Components/pages/Home.page";
import DashboardPage from "./Components/pages/Dashboard.page";

function App() {
  return (
    <>
      <HomeHOC path="/home" exact component={HomePage} />
      <DashboardHOC path="/dashboard" exact component={DashboardPage}/>
    </>
  );
}

export default App;

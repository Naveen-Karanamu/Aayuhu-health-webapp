// HOC
import HomeHOC from "./HOC/Home.HOC";

// Pages
import HomePage from "./Components/pages/Home.page";

function App() {
  return (
    <>
      <HomeHOC path="/home" exact component={HomePage} />
    </>
  );
}

export default App;

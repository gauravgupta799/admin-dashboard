import "./assets/scss/main.scss";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Header from "./Layout/Header/Header";
import SideMenu from "./Layout/SideMenu/SideMenu";
import Footer from "./Layout/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <SideMenu/>
      <Dashboard/>
      <Footer/>
    </div>
  );
}

export default App;

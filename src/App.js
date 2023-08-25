import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SidebarToggle from "./components/SidebarToggle";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <SidebarToggle />
      <Navbar />
      <Profile />
    </div>
  );
};

export default App;

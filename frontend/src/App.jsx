import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import NavBar from "./components/NavBar.jsx";
import LoginPage from "./views/LoginPage.jsx";
import DispatcherPage from "./views/DispatcherPage.jsx";
import DriverPage from "./views/DriverPage.jsx";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<LoginPage />} />
          <Route path="/dispatcher" element={<DispatcherPage />} />
          <Route path="/driver" element={<DriverPage />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

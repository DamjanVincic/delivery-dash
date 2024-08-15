import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import ProtectedRoute from "./components/ProtectedRoute";
import Footer from "./components/Footer.jsx";
import NavBar from "./components/NavBar.jsx";
import LoginPage from "./views/LoginPage.jsx";
import DispatcherPage from "./views/DispatcherPage.jsx";
import DriverPage from "./views/DriverPage.jsx";

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<LoginPage />} />
          <Route
            path="/dispatcher"
            element={
              <ProtectedRoute role="dispatcher">
                <DispatcherPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/driver"
            element={
              <ProtectedRoute role="driver">
                <DriverPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
        <Footer />
      </Router>
      <ToastContainer />
    </AuthProvider>
  );
}

export default App;

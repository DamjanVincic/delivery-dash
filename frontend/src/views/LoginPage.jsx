import "../styles/LoginPage.css";
import LoginForm from "../components/LoginForm";
import backgroundImage from "../assets/login_page.jpg";

export default function LoginPage() {
  return (
    <div
      id="bg-img"
      className="p-5 text-center bg-image img-fluid"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
        <div className="d-flex justify-content-center align-items-center mt-5">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

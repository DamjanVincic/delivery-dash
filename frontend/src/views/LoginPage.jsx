import LoginForm from "../components/LoginForm";
import backgroundImage from "../assets/background.jpg";

export default function LoginPage() {
  return (
    <div
      className="p-5 text-center bg-image img-fluid"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: "100vh",
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

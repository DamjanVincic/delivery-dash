import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import { login } from "../utils/auth";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await login(username, password);
    const { success, token, user } = response;
    if (success) {
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      user.role === "dispatcher"
        ? navigate("/dispatcher")
        : navigate("/driver");
    } else {
      setError(response.error);
    }
  };

  return (
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className="bg-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "500px" }}
          >
            <MDBCardBody className="p-5 w-100 d-flex flex-column">
              <h2 className="fw-bold mb-2 text-center">Sign in</h2>
              <p className="mb-3">Enter your email and password.</p>

              {error && <div className="danger">{error}</div>}
              <form>
                <MDBInput
                  wrapperClass="mb-4 w-100"
                  label="Username"
                  type="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  size="lg"
                />
                <MDBInput
                  wrapperClass="mb-4 w-100"
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  size="lg"
                />

                <hr className="mb-4" />

                <MDBBtn size="lg" onClick={handleLogin} type="submit">
                  Sign In
                </MDBBtn>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

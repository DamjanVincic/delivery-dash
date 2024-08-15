import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBValidation,
  MDBValidationItem,
} from "mdb-react-ui-kit";
import { useAuth } from "../hooks/useAuth";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login, user, error } = useAuth();

  const navigate = useNavigate();

  const validateForm = () => {
    return username.length > 0 && password.length > 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    await login(username, password);
  };

  useEffect(() => {
    if (user) {
      user.role === "dispatcher"
        ? navigate("/dispatcher")
        : navigate("/driver");
    }
  }, [user, navigate]);

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "bottom-right",
        autoClose: 2500,
      });
    }
  }, [error]);

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
              <p className="mb-4">Enter your email and password.</p>

              <MDBValidation
                onSubmit={handleLogin}
                noValidate
                className="row g-3"
              >
                <MDBValidationItem feedback="Username cannot be empty" invalid>
                  <MDBInput
                    wrapperClass="mb-4 w-100"
                    label="Username"
                    type="username"
                    value={username}
                    required
                    onChange={(e) => setUsername(e.target.value)}
                    size="lg"
                    name="test"
                    id="test"
                  />
                </MDBValidationItem>

                <MDBValidationItem feedback="Password cannot be empty" invalid>
                  <MDBInput
                    wrapperClass="mb-4 w-100"
                    label="Password"
                    type="password"
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    size="lg"
                  />
                </MDBValidationItem>

                <hr className="mb-4" />

                <MDBBtn size="lg" type="submit">
                  Sign In
                </MDBBtn>
              </MDBValidation>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

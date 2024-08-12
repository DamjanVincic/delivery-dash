import { useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarBrand,
  MDBNavbarItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import icon from "../assets/logo.svg";
import { logout, isLoggedIn, getLoggedInUser } from "../utils/auth";

export default function NavBar() {
  const navigate = useNavigate();
  const user = getLoggedInUser();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <header>
        <MDBNavbar light bgColor="light">
          <MDBContainer fluid>
            <MDBNavbarBrand href="#">
              <img src={icon} height="30" alt="" loading="lazy" />
              Delivery Dash
            </MDBNavbarBrand>
            {isLoggedIn() && (
              <MDBNavbarNav right fullWidth={false}>
                <MDBNavbarItem>
                  <MDBDropdown>
                    <MDBDropdownToggle
                      tag="a"
                      className="nav-link"
                      role="button"
                    >
                      {user.username}
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem link onClick={handleLogout}>
                        Log Out
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavbarItem>
              </MDBNavbarNav>
            )}
          </MDBContainer>
        </MDBNavbar>
      </header>
    </>
  );
}

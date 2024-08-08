import { MDBContainer, MDBNavbar, MDBNavbarBrand } from "mdb-react-ui-kit";
import icon from "../assets/logo.svg";

export default function NavBar() {
  return (
    <>
      <header>
        <MDBNavbar light bgColor="light">
          <MDBContainer fluid>
            <MDBNavbarBrand href="#">
              <img src={icon} height="30" alt="" loading="lazy" />
              Delivery Dash
            </MDBNavbarBrand>
          </MDBContainer>
        </MDBNavbar>
      </header>
    </>
  );
}

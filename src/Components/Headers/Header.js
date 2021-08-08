// import React from "react";
// import { Fragment } from "react";
// import { Nav, Navbar } from "react-bootstrap";
// import { Link } from "react-router-dom";
// // import "./Headers.css";

// const Headers = ({ auth }) => {
//   console.log();

//   const onLogout = (e) => {
//     localStorage.removeItem("user");
//     window.location.href = "/";
//   };

//   const guestMenu = (
//     <Nav.Link to="/" as={Link}>
//       Login
//     </Nav.Link>
//   );

//   const authMenu = (
//     <Fragment>
//       <Nav.Link to="/Home" as={Link}>
//         Money Transfer
//       </Nav.Link>

//       <Nav.Link to="/Home" as={Link}>
//         Register
//       </Nav.Link>

//       <Nav.Link onClick={onLogout}>Login</Nav.Link>
//     </Fragment>
//   );

//   return (
//     <Fragment>
//       <div>
//         <Navbar className="md-2" bg="info">
//           <Navbar.Brand to="/" as={Link}>
//             MICHEAL JINO
//           </Navbar.Brand>
//         </Navbar>
//       </div>

//       <br />

//       <div>
//         <Navbar expand="lg" bg="light" variant="light">
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="mr-auto _navbar">{auth ? authMenu : guestMenu}</Nav>
//           </Navbar.Collapse>
//         </Navbar>
//       </div>
//     </Fragment>
//   );
// };

// export default Headers;

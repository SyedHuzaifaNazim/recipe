import React from "react";
import { StrictMode } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import Support from "../Pages/Support";
import Recipes from "../Pages/Recipes";
import Home from "./Home";
import SignIn from "../Pages/SignIn";
// import logo from 'https://www.canva.com/design/DAGOPVIiglw/e6gmZaepUJOgQFUnTIHODA/view?utm_content=DAGOPVIiglw&utm_campaign=designshare&utm_medium=link&utm_source=editor';

// 'strict';
// function Header() {
//     return(
//         <>
//         <Navbar expand="lg" className="bg-white-transparent">
//       <Container>
//         {/* <img src={logo} alt="" /> */}
//         <Navbar.Brand href="#Home" className="recipe-title">My Recipes</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link onClick={SignIn}>Home {SignIn}</Nav.Link>
//             <Nav.Link>Recipes</Nav.Link>
//             <NavDropdown title="More" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Contact</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//               <link>
//                 About
//                 </link>
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">
//               Support Us
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Sign in
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//         </>
//     )
// }

const Header = () => {
  return (
    <>
    <div className="grid xl:grid-cols-1 grid-cols-1">
      <div className="p-5">
        <div className="py-3 px-3 rounded-xl border w-full bg-green-900">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                />
              </svg>
              <p className="font-semibold text-white">LOGO</p>
              <div className="relative hidden md:block lg:block">
                <input
                  className="rounded-3xl py-3 px-3 outline-none text-xs w-[350px] pr-10"
                  placeholder="Search for Grocery, Stores, Vegetable, or Meat"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 text-green-900 absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-yellow-300 hidden md:block lg:block"
              >
                <path
                  fillRule="evenodd"
                  d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-sm text-white hidden md:block lg:block">
                Order now and get it within <span className="text-yellow-300">15 min!</span>
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 text-white rounded-full ring-2 ring-white p-1 relative"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              <img
                className="inline-block w-8 h-8 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Header;
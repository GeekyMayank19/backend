import React, { useEffect, useState } from "react";
import {  Nav } from "react-bootstrap";
import {  useNavigate,useLocation } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentlocation,setCurrentlocation] = useState("/");
  useEffect(()=>{
    setCurrentlocation(location.pathname)
  },[location.pathname])
  const onClick = (route: string) => {
    if(route==="home"){
      navigate("");
      return;
    }
    navigate(`/home/${route}`);
  };


  return (
    <div>
      <Nav variant="tabs" defaultActiveKey="#first">
        <Nav.Item>
          <Nav.Link
            active={currentlocation==="/home"?true:false}
            onClick={() => onClick("home")}
          >
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link active={false} href="#download">
            Download
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            active={currentlocation==="/home/signup"?true:false}
            onClick={() => onClick("signup")}
          >
            SignUp
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link active={currentlocation==="/home/login"?true:false}  onClick={() => onClick("login")}>
            Login
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default NavBar;

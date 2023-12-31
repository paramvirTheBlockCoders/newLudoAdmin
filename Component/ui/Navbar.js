import React, { useState, useEffect } from "react";
import { Collapse, Dropdown } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import {signOut, useSession}  from 'next-auth/react';
import { pink } from "@material-ui/core/colors";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(null);
  const router  = useRouter();

  function logOutHandler() {
    router.push("/")
    window.localStorage.clear();
    // window.location.reload();
  }

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg top-nav navbar-light bg-light">
          <div className="container-fluid" id="fluid-set">
            <a className="navbar-brand" href="#" id="href-set">
              {" "}
              <img style={{ height: "80px" }} 
              // src="/AyewaLogo.png"
               /><h1><strong>LUDO</strong></h1>
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded={open}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
           <Collapse in={open}>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
                style={{ justifyContent: "flex-end", position:"absolute", right:"3%", marginRight:"0px !important", margin:"0" }}
              >
                <ul
                  className="navbar-nav mb-2 mb-lg-0"
                  style={{ marginLeft: "auto !important" }}
                 >
                
                 {/* {session ? ( */}
                    <li className="nav-item">
                      {/* <Link href={"/"}> */}
                        <button onClick={logOutHandler}
                        //  onClick={()=>signOut('/login')}
                          className="btn btn-outline-success border-btn"
                          style={{ marginRight: "10px" }}
                          type="submit"
                        >
                          Logout
                        </button>
                      {/* </Link> */}
                    </li>
                  {/* ) : null} */}

                  {/* {!session ? ( */}
                    <li className="nav-item">
                      <Link href={"/login"}>
                        <button
                          className="btn btn-outline-success border-btn"
                          type="submit"
                        >
                          LOGIN / SIGNUP
                        </button>
                      </Link>
                    </li>
                  {/* ): null} */}
                
                </ul>
              </div>
            </Collapse>
                 
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

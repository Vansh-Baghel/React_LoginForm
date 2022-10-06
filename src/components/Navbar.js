  import classes from "./Navbar.module.css";
  import img from "../Resources/Vansh Baghel.png";
  import { useState } from "react";

  const Navbar = () => {   
      const [hamClickedIcon , sethamClickedIcon ] = useState(false);
      const [hamClickedLinks , sethamClickedLinks ] = useState(false);

      const onHamburgerEventHandler = () => {
        sethamClickedIcon(!hamClickedIcon);
        sethamClickedLinks(!hamClickedLinks);
      }
      
    return (
      <nav className={classes.nav}>
        <a href="/#" className={classes.leftAnchor}>
          <img src={img} alt="VBlogo" className={classes.img}></img>
          <h2 className={classes.heading}> VB Agency </h2>
        </a>
          <div className={`${hamClickedIcon ? [classes.hamburger, classes.active].join(' ') : classes.hamburger}`} onClick={onHamburgerEventHandler}>
            <span className={classes.bar}></span>
            <span className={classes.bar}></span>
            <span className={classes.bar}></span>
          </div>
        <div className={`${hamClickedIcon ? [classes['links-div'], classes.active].join(' ') : classes['links-div']}`}>
          <ul className={classes.ul}>
            <li>
              <a href="/#" className={classes.a}>
                Home
              </a>
            </li>
            <li>
              <a href="/#" className={classes.a}>
                About
              </a>
            </li>
            <li>
              <a href="/#" className={classes.a}>
                Experts
              </a>
            </li>
            <li>
              <a href="/#" className={classes.a}>
                Feedback
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  };

  export default Navbar;

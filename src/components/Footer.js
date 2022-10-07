import classes from "./Footer.module.css";
import img from "../Resources/Contact-img.jpg"
import {AiOutlineFacebook, AiOutlineInstagram , AiOutlineTwitter} from "react-icons/ai"

const Footer = (props) => {
    
  return (
    <div className={classes.container}>
      <div className={classes.brand}>
          <img src={img} alt="Contactlogo" className={classes.img}></img>
          <h3 className={classes.heading}> Login Experts </h3>
          {/* Gave p tag 'a' class to get the italic text and fonts. */}
          <p className={classes.a}> Just one click away!</p>
    </div>
    <div className={classes.socials}>
        <h2 className={classes.heading}> Socials </h2>
        <p className={classes.p}>
        <a href="/#" className={classes.a}>
            <AiOutlineInstagram /> Instagram
        </a>
        </p>
        <p className={classes.p}>
        <a href="/#" className={classes.a}>
            <AiOutlineFacebook /> Facebook
        </a>
        </p>
        <p className={classes.p}>
        <a href="/#" className={classes.a}>
            <AiOutlineTwitter /> Twitter
        </a>
        </p>
    </div>
    </div>
  );
};

export default Footer;

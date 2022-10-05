import classes from "./Navbar.module.css";
import img from "../Resources/Vansh Baghel.png"

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <a href="/#" className={classes.leftAnchor}>
                <img src={img} alt="VBlogo" className={classes.img}></img>
                    <h2 className={classes.heading}> VB Agency </h2>
            </a>
            <div className={classes['links-div']}>
                <ul className={classes.ul}>
                    <li>
                        <a href="/#" className={classes.a}>Home</a>
                        </li>
                    <li>
                        <a href="/#" className={classes.a}>About</a>
                    </li>
                    <li>
                        <a href="/#" className={classes.a}>Experts</a>
                    </li>
                    <li>
                        <a href="/#" className={classes.a}>Feedback</a>
                    </li>
                </ul>
            </div>
        </nav>
        )
}

export default Navbar;

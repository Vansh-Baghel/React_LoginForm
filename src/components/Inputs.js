import classes from "./Inputs.module.css"
import {BsPersonCircle , BsTelephoneFill } from "react-icons/bs"
import {RiLockPasswordFill } from "react-icons/ri"
import {MdEmail } from "react-icons/md"


const Inputs = (props) => {
    return (
        <form className={classes.form}>
            <div className={classes.inputDiv}>
            <BsPersonCircle className={classes.svg}/>
            <input type="text" placeholder="First Name"></input>
            </div>
            <div className={classes.inputDiv}>
            <BsPersonCircle className={classes.svg} />
            <input type="text" placeholder="Last Name"></input>
            </div>
            <div className={classes.inputDiv}>
            <BsTelephoneFill className={classes.svg} />
            <input type="number" placeholder="Phone Number"></input>
            </div>
            <div className={classes.inputDiv}>
            <MdEmail className={classes.svg} />
            <input type="email" placeholder="Email"></input>
            </div>
            <div className={classes.inputDiv}>
            <RiLockPasswordFill className={classes.svg} />
            <input type="password" placeholder="Password"></input>
            </div>
            <div className={classes.inputDiv}>
            <RiLockPasswordFill className={classes.svg} />
            <input type="password" placeholder="Confirm Password"></input>
            </div>
        </form>
    )
}

export default Inputs;
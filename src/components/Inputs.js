import classes from "./Inputs.module.css"
import {BsPersonCircle , BsTelephoneFill } from "react-icons/bs"
import {RiLockPasswordFill } from "react-icons/ri"
import {MdEmail } from "react-icons/md"
import { useState } from "react"

const Inputs = (props) => {
    const [getFirstName , setFirstName] = useState('');
    const [getLastName , setLastName] = useState('');
    const [getEmail , setEmail] = useState('');
    
    const onSubmitGetInfoHandler = (e) => {
        e.preventDefault();
        
        const details = {
            fName: getFirstName,
            lName: getLastName,
            email: getEmail
        }
        props.onSubmitInApp(details.fName , details.lName , details.email);
    }

    return (
        <form onSubmit={onSubmitGetInfoHandler}>
        <div className={classes.form}>
            <div className={classes.inputDiv}>
            <BsPersonCircle className={classes.svg}/>
            <input type="text" placeholder="First Name" value={getFirstName} onChange={(e) => setFirstName(e.target.value)}></input>
            </div>
            <div className={classes.inputDiv}>
            <BsPersonCircle className={classes.svg} />
            <input type="text" placeholder="Last Name" value={getLastName} onChange={(e) => setLastName(e.target.value)}></input>
            </div>
            <div className={classes.inputDiv}>
            <BsTelephoneFill className={classes.svg} />
            <input type="number" placeholder="Phone Number"></input>
            </div>
            <div className={classes.inputDiv}>
            <MdEmail className={classes.svg} />
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div className={classes.inputDiv}>
            <RiLockPasswordFill className={classes.svg} />
            <input type="password" placeholder="Password"></input>
            </div>
            <div className={classes.inputDiv}>
            <RiLockPasswordFill className={classes.svg} />
            <input type="password" placeholder="Confirm Password"></input>
            </div>
        </div>
        <button className={classes.button} type="submit">Register</button>

        </form>
    )
}

export default Inputs;
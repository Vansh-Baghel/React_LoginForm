import classes from "./Inputs.module.css"
import {BsPersonCircle , BsTelephoneFill } from "react-icons/bs"
import {RiLockPasswordFill } from "react-icons/ri"
import {MdEmail } from "react-icons/md"
import { useRef } from "react"
import emailjs from '@emailjs/browser';

// https://dashboard.emailjs.com/admin

const Inputs = () => {
    const form = useRef();

    // const [getFirstName , setFirstName] = useState('');
    // const [getLastName , setLastName] = useState('');
    // const [getEmail , setEmail] = useState('');
    
    const onSubmitGetInfoHandler = (e) => {
        e.preventDefault();
        
        // const details = {
        //     fName: getFirstName,
        //     lName: getLastName,
        //     email: getEmail
        // }

        emailjs.sendForm('service_vpttoc9', 'template_560od1d', form.current, 'mAexXpjGMDacVa4D2')
        .then((result) => {
            console.log(result.text);
            console.log("Submitted Man");
        }, (error) => {
            console.log(error.text);
        });

        // props.onSubmitInApp(details.fName , details.lName , details.email);
    }

    return (
        <form ref={form} onSubmit={onSubmitGetInfoHandler}>
        <div className={classes.form}>
            <div className={classes.inputDiv}>
            <BsPersonCircle className={classes.svg}/>
            {/* name attribute is used to pass the values which are on email.js website */}
            <input type="text" placeholder="First Name" name="from_fName"></input>
            </div>
            <div className={classes.inputDiv}>
            <BsPersonCircle className={classes.svg} />
            <input type="text" placeholder="Last Name" name="from_lName"></input>
            </div>
            <div className={classes.inputDiv}>
            <BsTelephoneFill className={classes.svg} />
            <input type="number" placeholder="Phone Number"></input>
            </div>
            <div className={classes.inputDiv}>
            <MdEmail className={classes.svg} />
            <input type="email" placeholder="Email" name="from_email"></input>
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
import React from "react";
import styles from "./styles.module.scss";
import {Cookies} from "react-cookie";
import {Link} from "react-router-dom";

const Buttons = () => {
    return (
        <div className={styles.header_buttons}>
            <Link to={'/login'}>
            <button type={"submit"} name={'login'}>Login</button>
            </Link>
            <Link to={'/register'}>
            <button type={"submit"} name={'login'}>Register</button>
            </Link>
        </div>
        )
}

export default Buttons;

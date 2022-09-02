import React from "react";
import styles from "./styles.module.scss";
import {Cookies} from "react-cookie";
import {Link} from "react-router-dom";

const Buttons = () => {
    const cookies = new Cookies();
    cookies.set('myCat', 'Pacman', { path: '/' });
    return (
        <div className={styles.header_buttons}>
            <Link to={'/login'}>
            <button type={"submit"} name={'login'}>Login</button>
            </Link>
            <button type={"submit"} name={'login'}>Register</button>
        </div>
        )
}

export default Buttons;

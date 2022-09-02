import React from "react";
import styles from "./styles.module.scss";
import Buttons from "./buttons";

const Header = () => {
    return (
        <div className={styles.header_container}>
            <p>hello chel</p>
            <Buttons/>
        </div>
        )
}

export default Header;

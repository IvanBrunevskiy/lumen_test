import React from "react";
import styles from "./styles.module.scss";
import Buttons from "./buttons";
import {Cookies} from "react-cookie";
import axios from "axios";
import {useEffect, useState} from "react";
import Logout from "./logout";

const Header = () => {
    const cookies = new Cookies();
    const token = cookies.get('access_token');
    const access_token = 'Bearer ' + token;
    const [userData, setUserData] = useState([]);

    try {
        useEffect(() => {
        axios({
            url: 'http://lumen.test/api/check-auth',
            headers: {
                "Content-type": "application/json",
                "Authorization": access_token,
            },
            params: {
                Authorization: access_token,
            },
            method: "POST",
            data: null
        }).then(({data}) => {
            setUserData(data);
            return data;
        });
        }, [])
    } catch (e) {
        console.log(e)
    }
    if (userData.user) {
        return (
            <div className={styles.header_container}>

                <p>hello {userData.user.name}</p>
                <Logout/>
            </div>
        )
    }

    return (
        <div className={styles.header_container}>
            <p>Unauthorized</p>
            <Buttons/>
        </div>
        )
}

export default Header;

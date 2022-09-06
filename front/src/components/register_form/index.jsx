import React, {useState} from "react";
import axios from "axios";
import {Cookies} from "react-cookie";
import styles from "./styles.module.scss";


const Register = () => {
    const [inputEmail, setInputEmail] = useState('');
    const [inputName, setInputName] = useState('');
    const [inputPassword, setInputPassword] = useState('');

    const cookies = new Cookies();
    return (
        <body>
        <h1>Register Form</h1>
        <div className={styles.wrapper}>
            <div className={styles.signin}>
                <input type="email" name={'email'} value={inputEmail} placeholder={'email'} onChange={e => setInputEmail(e.target.value)}/>
                <input type="text" name={'name'} value={inputName} placeholder={'name'} onChange={e => setInputName(e.target.value)}/>
                <input type="password" name={'password'} value={inputPassword} placeholder={'password'} onChange={e => setInputPassword(e.target.value)}/>
                <button type={"submit"} onClick={async () => {
                    try {
                        await axios({
                            url: 'http://lumen.test/api/login',
                            headers: {
                                "Content-type": "application/json",
                            },
                            params: {
                                email: inputEmail,
                                password: inputPassword
                            },
                            method: "POST",
                            data: null
                        }).then(({data}) => {
                            cookies.set('access_token', data.access_token, { path: '/' });
                            return data;
                        });
                    } catch (e) {
                        console.log(e)
                    }
                }}>&#xf0da;
                </button>
                <p>forgot your password? <a href="#">click here</a></p>
            </div>
        </div>
        </body>

    )
}

export default Register;

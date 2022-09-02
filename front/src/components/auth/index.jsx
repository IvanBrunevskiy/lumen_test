import React, {useState} from "react";
import axios from "axios";
import {Cookies} from "react-cookie";
import styles from "./styles.module.scss";


const Login = () => {
    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');

    const cookies = new Cookies();
    return (
        <div>
            <label>
                Email__
                <input type="text" name={'email'} value={inputEmail} onChange={e => setInputEmail(e.target.value)}/>
            </label>
            <br/>
            <label>
                Password__
                <input type="text" name={'password'} value={inputPassword} onChange={e => setInputPassword(e.target.value)}/>
            </label>
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

            }}>Login
            </button>
        </div>
    )
}

export default Login;

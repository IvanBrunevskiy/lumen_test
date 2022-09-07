import React, {useState} from "react";
import axios from "axios";
import {Cookies} from "react-cookie";
import styles from "./styles.module.scss";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const Login = () => {
    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');

    const [modalText, setModalText] = React.useState('');
    const [error, setError] = React.useState(false);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        if (!error){
            window.location = "/"
        }
    }

    const cookies = new Cookies();
    return (
        <div className={styles.container}>
        <h1>Sign In Form</h1>
        <div className={styles.wrapper}>
            <div className={styles.signin}>
                <input type="email" name={'email'} value={inputEmail} onChange={e => setInputEmail(e.target.value)}/>
                <input type="password" name={'password'} value={inputPassword}
                       onChange={e => setInputPassword(e.target.value)}/>
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
                            if (data.status === 200) {
                                setModalText('Login Success')
                                cookies.set('access_token', data.access_token, {path: '/'});
                                setError(false)
                                handleOpen(true)
                            }

                            return data;
                        });
                    } catch (e) {
                        setModalText('Error')
                        setError(true)
                        handleOpen()
                        console.log(e)
                    }
                }}>&#xf0da;
                </button>
                <p>forgot your password? <a href="#">click here</a></p>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            {modalText}
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </div>
        </div>

    )
}

export default Login;

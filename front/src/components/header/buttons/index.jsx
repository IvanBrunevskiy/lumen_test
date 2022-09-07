import React from "react";
import styles from "./styles.module.scss";
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Buttons = () => {
    return (
        <Stack direction="row" spacing={2}>
        <div className={styles.header_buttons_lr}>
            <Link to={'/login'}>
            <Button type={"submit"} name={'login'} variant="contained" color="success">Login</Button>
            </Link>
            <Link to={'/register'}>
            <Button variant="contained" type={"submit"} name={'login'}>Register</Button>
            </Link>
        </div>
        </Stack>
        )
}

export default Buttons;

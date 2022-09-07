import React from "react";
import {Cookies} from "react-cookie";
import axios from "axios";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

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

const Logout = () => {
    const cookies = new Cookies();
    const token = cookies.get('access_token');
    const [modalText, setModalText] = React.useState('');

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        window.location = "/"
    }


    return (
        <div>
            <Stack direction="row" spacing={2}>
                <Button variant="outlined" color="error" type={"submit"} onClick={async () => {
                    try {
                        await axios({
                            url: 'http://lumen.test/api/logout',
                            headers: {
                                "Content-type": "application/json",
                                "Authorization": "Bearer" + token,
                            },
                            method: "POST",
                            data: null
                        }).then(({data}) => {
                            if (data.status === 200) {
                                setModalText('Logout Success')
                                handleOpen()
                            }
                            return data;
                        });
                    } catch (e) {
                        console.log(e)
                    }
                }}>Logout
                </Button>
            </Stack>
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
    )
}

export default Logout;

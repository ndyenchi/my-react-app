import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import userService from "../service/UserService";
import {Modal} from "@mui/material";


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const formGroup = {
    margin: '15px',
    justifyContent: "space-between",
}
const Input: any = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 4px;
`;

export default function Login() {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        let data = await userService.login({
            email: username,
            password: password
        })
        console.log(data);
    };

    function signIn() {
        setOpen(true);
    }

    return (
        <>
            <button className='p-2 bg-white border-[#0dcaf0] mx-2 rounded-md hover:bg-[#0dcaf0] text-[16px]'
                    onClick={signIn}>
                LOGIN
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2"
                                className="text-center justify-self-center">
                        Login
                        <hr/>
                    </Typography>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div style={formGroup}>
                                <label htmlFor="username">Username</label>
                                <Input type="text" id="username" name="username"
                                       placeholder="Enter your username"
                                       required
                                       value={username}
                                       onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setUsername(e.target.value)}/>
                            </div>
                            <div style={formGroup}>
                                <label htmlFor="password">Password</label>
                                <Input type="password" id="password" name="password"
                                       placeholder="Enter your password"
                                       required
                                       value={password}
                                       onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setPassword(e.target.value)}/>
                            </div>
                            <button type="submit"
                                    className="bg-[#0dcaf0] w-28 min-h-full h-10 rounded-sm w-11/12 mx-[15px]">Login
                            </button>
                        </form>
                    </div>
                </Box>
            </Modal>
        </>
    );
}
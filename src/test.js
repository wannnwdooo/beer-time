// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import {
//     Container,
//     Dialog,
//     DialogActions,
//     DialogContent,
//     DialogContentText,
//     DialogTitle,
//     TextField
// } from "@mui/material";
// import {useState} from "react";
//
//
//
//
// function App() {
//     const [open, setOpen] = useState(false)
//
//     const handleClickOpen = () => {
//         setOpen(true)
//     }
//     const handleClose = () => {
//         setOpen(false)
//     }
//     return (
//         <Box sx={{flexGrow: 1}}>
//             <AppBar position="static">
//                 <Container>
//                     <Toolbar>
//                         <IconButton
//                             size="large"
//                             edge="start"
//                             color="inherit"
//                             aria-label="menu"
//                             sx={{mr: 0}}
//                         >
//                             <MenuIcon/>
//                         </IconButton>
//                         <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
//                             App
//                         </Typography>
//                         <Button color="inherit" onClick={handleClickOpen}>Login</Button>
//                         <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
//                             <DialogTitle id='form-dialog-title'>Login</DialogTitle>
//                             <DialogContent>
//                                 <DialogContentText>Log in to see videos</DialogContentText>
//                                 <TextField
//                                 autoFocus
//                                 margin='dense'
//                                 id='name'
//                                 label='Email Adress'
//                                 type='email'
//                                 fullWidth
//                                 />
//                                 <TextField
//                                     autoFocus
//                                     margin='dense'
//                                     id='pass'
//                                     label='Password'
//                                     type='password'
//                                     fullWidth
//                                 />
//                             </DialogContent>
//                             <DialogActions>
//                                 <Button onClick={handleClose} color='primary'>Cancel</Button>
//                                 <Button onClick={handleClose} color='primary'>Login</Button>
//                             </DialogActions>
//                         </Dialog>
//                         <Button color="secondary" variant='contained'>Sign Up</Button>
//                     </Toolbar>
//                 </Container>
//             </AppBar>
//         </Box>
//     );
// }
//
// export default App;

import React, {useState} from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {CardMedia, Modal, Tab} from "@mui/material";
import {ModalItemStyles} from "./ModalItemStyles";
import logo from "../../IMG/brewdog-logo.png";
import {TabContext, TabList, TabPanel} from "@mui/lab";

const ModalItem = (props) => {

    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const modalClose = () => props.setOpen(false);

    return (
        <Modal
            open={props.open}
            onClose={modalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={ModalItemStyles}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Base" value="1" />
                            <Tab label="Desc" value="2" />
                            <Tab label="Add" value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1" onClick={modalClose}>
                        <Box sx={{height: 300, width: 150, margin: '0 auto'}}>
                            <CardMedia
                                component="img"
                                sx={{width: '100%', height: '100%', objectFit: 'contain'}}
                                image={props.img || logo}
                                alt="Beer"
                            />
                        </Box>
                        <Typography id="modal-modal-title" variant="h5" component="h2"
                                    sx={{textAlign: 'center',mt: 2}}>
                            {props.name}
                        </Typography>
                        <Typography id="modal-modal-description" variant="h6"
                                    sx={{textAlign: 'center',mt: 1}}>
                            {props.tagline}
                        </Typography>
                    </TabPanel>
                    <TabPanel value="2">
                        <Typography id="modal-modal-description" sx={{mt: 1}}>
                        {props.description}
                    </Typography>
                    </TabPanel>
                    <TabPanel value="3">
                        {props.additions.map(addition =>
                            <Typography sx={{paddingTop: 1.5, color: '#4a3f34', fontWeight: 'bold', textAlign: 'center'}} key={addition}>{addition}</Typography>
                        )}
                    </TabPanel>
                </TabContext>
            </Box>
        </Modal>
    );
};

export default ModalItem;
import React from 'react';
import projects from '../assets/data/Projects.json';
import { ReactComponent as Spikestat_Static } from '../assets/svg/spikestat-static.svg';
import { ReactComponent as CryptMSG_Static } from '../assets/svg/cryptmsg-static.svg';

import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Projects() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className='projects'>
            <h1>Projects</h1>
            <Spikestat_Static />
            <CryptMSG_Static />

            <Button className='button' onClick={handleClickOpen}>
                <div style={{ fontWeight: 'bold' }}>CryptMSG</div>
                <Divider flexItem />
                <div>August 2022 - December 2022</div>
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby='alert-dialog-title'
                aria-describedby='alert-dialog-description'>
                <DialogTitle id='alert-dialog-title'>
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id='alert-dialog-description'>
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleClose} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Projects;

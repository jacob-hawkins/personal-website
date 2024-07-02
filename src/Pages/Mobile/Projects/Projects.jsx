import React, { useState } from 'react';
import './Projects.css';
import SpikestatFrame from './SpikeStatFrame';
import CryptmsgFrame from './CryptmsgFrame';
import Project from '../Components/Project';
import { proj } from '../../../proj-list';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Typography,
    styled,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

function Projects() {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const spikelang = ['react'];
    const cryptlang = ['react', 'javascript'];
    const spikeframe = ['mongodb', 'express', 'node'];

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpen2 = () => {
        setOpen2(true);
    };
    const handleClose2 = () => {
        setOpen2(false);
    };

    return (
        <div className='mobile-projects flex-align'>
            <div onClick={handleClickOpen}>
                <SpikestatFrame />
            </div>
            <div onClick={handleClickOpen2}>
                <CryptmsgFrame />
            </div>

            <div>
                <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby='customized-dialog-title'
                    open={open}>
                    <DialogTitle
                        sx={{ m: 0, p: 2, backgroundColor: '#485460', color: 'white' }}
                        id='customized-dialog-title'>
                        <div>SpikeStat</div>
                        <div>April 2023 - August 2023</div>
                    </DialogTitle>
                    <IconButton
                        aria-label='close'
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: 'white',
                        }}>
                        <CloseIcon />
                    </IconButton>
                    <DialogContent
                        dividers
                        sx={{
                            backgroundColor: '#485460',
                            color: 'white',
                        }}>
                        <Typography gutterBottom>
                            SpikeStat is a social media site that allows users to track Spikeball
                            games and share them with friends. SpikeStat allows users to post, like,
                            comment, and follow.
                        </Typography>
                        <div className='tags flex-align'>
                            {spikelang.map((i) => (
                                <p className='tag' id={i}>
                                    {i}
                                </p>
                            ))}
                            {spikeframe.map((i) => (
                                <p className='frame'>{i}</p>
                            ))}
                        </div>
                    </DialogContent>
                    <DialogActions
                        sx={{
                            backgroundColor: '#485460',
                            color: 'white',
                        }}>
                        <a
                            href='https://github.com/jacob-hawkins/spikestat'
                            target='_blank'
                            rel='noreferrer'>
                            <Button
                                sx={{
                                    backgroundColor: '#1e272e',
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: '#32414d',
                                    },
                                }}>
                                View on GitHub
                            </Button>
                        </a>
                    </DialogActions>
                </BootstrapDialog>
            </div>

            <div>
                <BootstrapDialog
                    onClose={handleClose2}
                    aria-labelledby='customized-dialog-title'
                    open={open2}>
                    <DialogTitle
                        sx={{ m: 0, p: 2, backgroundColor: '#485460', color: 'white' }}
                        id='customized-dialog-title'>
                        <div>CryptMSG</div>
                        <div>August 2022 - December 2022</div>
                    </DialogTitle>
                    <IconButton
                        aria-label='close'
                        onClick={handleClose2}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: 'white',
                        }}>
                        <CloseIcon />
                    </IconButton>
                    <DialogContent
                        dividers
                        sx={{
                            backgroundColor: '#485460',
                            color: 'white',
                        }}>
                        <Typography gutterBottom>
                            CryptMSG is a messaging platform that allows users to sign in and
                            message other users.
                        </Typography>

                        <Typography gutterBottom>
                            Worked with: Alex Austin, Dylan Lewis, Riley Crockett, Kijan Daniel
                        </Typography>
                        <div className='tags flex-align'>
                            {cryptlang.map((i) => (
                                <p className='tag' id={i}>
                                    {i}
                                </p>
                            ))}
                        </div>
                    </DialogContent>
                    <DialogActions
                        sx={{
                            backgroundColor: '#485460',
                            color: 'white',
                        }}>
                        <a
                            href='https://github.com/utk-cs340-fall22/CryptMSG'
                            target='_blank'
                            rel='noreferrer'>
                            <Button
                                sx={{
                                    backgroundColor: '#1e272e',
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: '#32414d',
                                    },
                                }}>
                                View on GitHub
                            </Button>
                        </a>
                        <a href='https://cryptmsg.net/' target='_blank' rel='noreferrer'>
                            <Button
                                sx={{
                                    backgroundColor: '#1e272e',
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: '#32414d',
                                    },
                                }}>
                                View Live Site
                            </Button>
                        </a>
                    </DialogActions>
                </BootstrapDialog>
            </div>

            <div className='mobile-projects-list'>
                {proj.map((p) => (
                    <Project key={p.id} proj={p} />
                ))}
            </div>
        </div>
    );
}

export default Projects;

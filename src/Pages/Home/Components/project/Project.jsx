import './project.css';
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
import { useState } from 'react';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function Project({ proj }) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className='project' onClick={handleClickOpen}>
                <div className='project-title'>{proj.title}</div>
                <hr />
                <div className='project-date'>{proj.date}</div>
            </div>

            <div>
                <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby='customized-dialog-title'
                    open={open}>
                    <DialogTitle
                        sx={{ m: 0, p: 2, backgroundColor: '#485460', color: 'white' }}
                        id='customized-dialog-title'>
                        <div>{proj.title}</div>
                        <div>{proj.date}</div>
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
                        <Typography gutterBottom>{proj.desc}</Typography>
                        {proj.group === true && (
                            <Typography gutterBottom>Worked with: {proj.team}</Typography>
                        )}
                    </DialogContent>
                    <DialogActions
                        sx={{
                            backgroundColor: '#485460',
                            color: 'white',
                        }}>
                        {proj.github != null && (
                            <a href={proj.github} target='_blank' rel='noreferrer'>
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
                        )}
                        {proj.live != null && (
                            <a href={proj.live} target='_blank' rel='noreferrer'>
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
                        )}
                    </DialogActions>
                </BootstrapDialog>
            </div>
        </>
    );
}

'use client';
import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography,
    Avatar,
    Box,
} from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const LogoutModal = ({ open, onClose, onConfirm }) => {
    return (
        <Dialog open={open} maxWidth="lg">
            <Box display="flex" flexDirection="column" alignItems="center" pt={3}>
                <Avatar sx={{ bgcolor: '#b3004b', width: 56, height: 56 }}>
                    <ExitToAppIcon sx={{width: 36, height:36}}/>
                </Avatar>
                <DialogTitle sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                    Are You Leaving ?
                </DialogTitle>
            </Box>

            <DialogContent sx={{ textAlign: 'center', marginTop: -2 }}>
                <Typography sx={{ mb: 1 }}>Are you sure want to logout ?</Typography>
                <Typography color="text.secondary">
                    All your unsaved data will be lost
                </Typography>
            </DialogContent>

            <DialogActions sx={{ justifyContent: 'center', pb: 2 }}>
                <Button
                    onClick={onClose}
                    variant="contained"
                    sx={{ backgroundColor: '#e0e0e0', color: '#000', textTransform: 'none', px: 2 }}
                >
                    Cancel
                </Button>
                <Button
                    onClick={onConfirm}
                    variant="contained"
                    sx={{ backgroundColor: '#b3004b', textTransform: 'none', px: 4 }}
                >
                    Yes
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default LogoutModal;

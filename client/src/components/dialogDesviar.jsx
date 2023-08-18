import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import PropTypes from 'prop-types';
import { blue } from '@mui/material/colors';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const AlertDialogSlide = ({ setOpenDialog, openDialog, estado }) => {

    // const handleClickOpen = () => {
    //     setOpenDialog(true);
    // };

    const handleClose = () => {
        setOpenDialog(false);
    };

    return (
        <div>
            <Dialog
                open={openDialog}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="isDesviada-y-desviada"
            >
                <DialogTitle>
                <span style={{ color: blue[500] }}>Estado impresora {estado.impresora} </span>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="isDesviada-y-desviada" component={'span'} sx={{ fontWeight: 'bold', fontSize: 16, color: blue }}>
                        <div style={{ margin: '8px 0' }}>
                            <span style={{ color: blue[500] }}>Desvío:</span> {estado.desviada ? 'DESVIADA' : 'Sin desvío'}
                        </div>
                        <div style={{ margin: '8px 0' }}>
                            <span style={{ color: blue[500] }}>Impresora desviada:</span> {estado.desviada ? estado.impresoraDesvio : 'Sin desvío'}
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancelar Trabajo</Button>
                    <Button onClick={handleClose}>Cerrar</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

AlertDialogSlide.propTypes = {
    openDialog: PropTypes.bool,
    setOpenDialog: PropTypes.func,
    estado: PropTypes.object
};
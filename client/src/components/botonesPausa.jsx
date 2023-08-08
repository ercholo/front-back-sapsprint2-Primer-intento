import { Button } from '@mui/material';
import { useState, useEffect } from 'react';

export const BotonPausa = (nombreImpresora) => {

    const printer = nombreImpresora.property;

    const [buttonText, setButtonText] = useState('Pausar');

    const handleClick = async () => {

        // La función para manejar el punchar el botón ¿fetch?
        console.log(`Boton pulsado por la impresora ${printer}`);
        
        try {
            const res = await fetch(`http://172.30.5.181:4444/impresoras/pausa/${printer}`, {
                method: 'GET'
            })
            const data = await res.json();
            console.log(data.pausa);           
            
        } catch (error)      {
            console.log(error);
        }
        
        setButtonText('Reanudar');        
    }
  
    return (

        <Button variant="contained"
            onClick={() =>
                handleClick(printer)
            }>
            {buttonText}
        </Button>
    )
}
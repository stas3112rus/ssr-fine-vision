import React, { useContext } from "react";
import { Context } from "../../ThemeContext";
import Button from '@mui/material/Button';
import { fineVisionMode } from "../../types/types";
import { setCookie } from 'cookies-next';

const HeaderFineMode: React.FC = () => {
    
    const context = useContext(Context); 

    const toggleFineMode = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, mode: fineVisionMode): void => {
        e.preventDefault();
        if(context){
            context.fineVisionMode.set(mode);
            setCookie('mode', mode, {maxAge: 365 * 24 * 60 * 60, path: './'});
        }
    }

    
    return (
        <div className="header__blockBtn">
            <Button 
                variant="contained" 
                onClick={(e)=>toggleFineMode(e, "light")}               
            >
                Светлая
            </Button>
            <Button 
                variant="contained"
                onClick={(e)=>toggleFineMode(e, "dark")}                
            >
                Темная
            </Button>
        </div>
    )
}

export default HeaderFineMode;
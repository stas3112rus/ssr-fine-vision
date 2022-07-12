import React, { useContext } from "react";
import { Context } from "../../ThemeContext";

import Button from '@mui/material/Button';
import { fontSizes } from "../../types/types";
import { setCookie } from 'cookies-next';

const HeaderBtnsSizes = () =>{


    const context = useContext(Context); 

    const changeFontSize = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, size: fontSizes): void => {
        e.preventDefault();
        if(context){
            context.fontSize.set(size);
            setCookie('fontSize', size, {maxAge: 365 * 24 * 60 * 60, path: './'});  
        }
    }

    return(
        <div className="header__blockBtn">
            <Button
                variant="contained"
                onClick={(e)=>changeFontSize(e, 100)}
            >
                100%
            </Button>
            <Button
                variant="contained"
                onClick={(e)=>changeFontSize(e, 150)}
            >
                150%
            </Button>
            <Button
                variant="contained"
                onClick={(e)=>changeFontSize(e, 200)}
            >
                200%
            </Button>
        </div>
    )

}

export default HeaderBtnsSizes;


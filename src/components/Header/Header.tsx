import React, { useContext } from "react";
import { useState } from 'react';

import { Context } from "../../ThemeContext";
import Button from '@mui/material/Button';
import styles from './header.module.scss';
import {themeContext} from "../../types/types";


const Header: React.FC = () => {
   
    const context = useContext<themeContext | null>(Context);  

    const changeTheme = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        e.preventDefault();     
        if (context){
            context.set(context.theme === "lightTheme" ? "darkTheme" : "lightTheme");
        }             
    }


    return (
        <div className={styles.header}>
             <Button 
                variant="contained"
                onClick={(e)=>changeTheme(e)}
            >
                Сменить тему
            </Button>
        </div>
    )

}

export default Header;
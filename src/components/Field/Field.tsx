import * as React from 'react';
import { useState, useContext } from 'react';
import styles from './Field.module.scss';
import { styled } from '@mui/material/styles';
import { Context } from '../../ThemeContext';
import Item from "../Item/Item";

type themesKinds = "lightTheme" | "darkTheme";

const Field = () => {              

    
    const [context] = useContext(Context); 

    

    const CustomField = styled('div')(({ theme }) => {
        console.log(theme);    
        return {        
            background: theme.darkTheme.backColor       
            }
    })
        
        
    

    return (        
            <div>
                <h2>Текущая тема: {context}</h2>
                <CustomField className={styles.Field}>
                    
                    <Item name="main" currentTheme={context} color="main"/>
                    <Item name="primary" currentTheme={context} color="primary"/>
                    <Item name="secondary" currentTheme={context} color="secondary"/>
                    <Item name="error" currentTheme={context} color="error"/>
                    <Item name="danger" currentTheme={context} color="danger"/>
                    <Item name="dark" currentTheme={context} color="dark"/>
                    <Item name="light" currentTheme={context} color="light"/>
                    <Item name="lovely" currentTheme={context} color="lovely"/>
                    <Item name="grossy" currentTheme={context} color="grossy"/>
                    <Item name="temporary" currentTheme={context} color="temporary"/>
            

                </CustomField>
            </div> 
    )   
}

export default Field;
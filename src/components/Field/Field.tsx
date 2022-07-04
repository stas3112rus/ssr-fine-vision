import * as React from 'react';
import { useState, useContext } from 'react';
import styles from './Field.module.scss';
import { styled } from '@mui/material/styles';
import { Context } from '../../ThemeContext';
import Item from "../Item/Item";

import { themeContext } from '../../types/types';


const Field = () => {    

    const context = useContext<themeContext | null>(Context);

    const CustomField = styled('div')(({ theme }) => ({        
        background: context?.theme ?  theme[context?.theme].backColor : "#fff",
    }));      

    return (        
            <div>
                <h2>Текущая тема: {context?.theme}</h2>
                <CustomField className={styles.Field}>
                    
                    <Item name="main" currentTheme={context ? context.theme : null} color="main"/>
                    <Item name="primary" currentTheme={context ? context.theme : null} color="primary"/>
                    <Item name="secondary" currentTheme={context ? context.theme : null} color="secondary"/>
                    <Item name="error" currentTheme={context ? context.theme : null} color="error"/>
                    <Item name="danger" currentTheme={context ? context.theme : null} color="danger"/>
                    <Item name="dark" currentTheme={context ? context.theme : null} color="dark"/>
                    <Item name="light" currentTheme={context ? context.theme : null} color="light"/>
                    <Item name="lovely" currentTheme={context ? context.theme : null} color="lovely"/>
                    <Item name="grossy" currentTheme={context ? context.theme : null} color="grossy"/>
                    <Item name="temporary" currentTheme={context ? context.theme : null} color="temporary"/>
                </CustomField>
            </div> 
    )   
}

export default Field;
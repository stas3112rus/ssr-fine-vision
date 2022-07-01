import * as React from 'react';
import { styled } from '@mui/material/styles';
import styles from './Item.module.scss';


interface IItem {
    name: string,
    currentTheme: "lightTheme" | "darkTheme",
    color: 
        "main" | 
        "primary" |         
        "secondary" |
        "error" |
        "danger" |
        "dark" |
        "light" |
        "lovely" |
        "grossy" |
        "temporary"
}

const Item = ({name, color, currentTheme}: IItem) =>{
    
    const CustomItem = styled('button')(({ theme }) => ({        
        background: theme[currentTheme][color],
        color: theme[currentTheme].fontColor
      }));

    return (
        <div className={styles.Item}>
             <CustomItem className={styles.ItemBtn}>{name}</CustomItem>
        </div>
       
    )

}

export default Item;
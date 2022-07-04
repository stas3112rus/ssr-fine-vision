import * as React from 'react';
import { styled } from '@mui/material/styles';
import styles from './Item.module.scss';
import Button from '@mui/material/Button';
import { IItem } from '../../types/types';

const Item = ({name, color, currentTheme}: IItem) =>{
    
    const CustomItem = styled(Button)(({ theme }) => ({        
        background: currentTheme ?  theme[currentTheme][color] : "#fff",
        color: currentTheme ?   theme[currentTheme].fontColor : "#000",
        
      }));

    return (
        <div className={styles.Item}>
             <CustomItem>{name}</CustomItem>
        </div>       
    )
}

export default Item;
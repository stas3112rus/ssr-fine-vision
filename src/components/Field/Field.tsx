import { useContext } from 'react';
import { styled } from '@mui/material/styles';
import { Context } from '../../ThemeContext';
import Item from "../Item/Item";

const Field = () => {    

    const context = useContext(Context);
  

    return (        
            <div>
                <h2>Текущая тема: {context?.themeMain.name}</h2>
                <div className={"field"}>        
                    <Item name="main" classModify="main"/>
                    <Item name="primary" classModify="primary"/>
                    <Item name="secondary" classModify="secondary"/>
                    <Item name="error" classModify="error"/>
                    <Item name="danger" classModify="danger"/>
                    <Item name="dark" classModify="dark"/>
                    <Item name="light" classModify="light"/>
                    <Item name="lovely" classModify="lovely"/>
                    <Item name="grossy" classModify="grossy"/>
                    <Item name="temporary" classModify="temporary"/>
                    
                </div>
            </div> 
    )   
}

export default Field;
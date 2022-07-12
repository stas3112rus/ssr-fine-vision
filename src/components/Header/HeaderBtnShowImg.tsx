import React, { useContext } from "react";
import { Context } from "../../ThemeContext";
import { setCookie } from 'cookies-next';
import Button from '@mui/material/Button';
import { fineVisionShowImage } from "../../types/types";

const HeaderBtnShowImg = () => {

    const context = useContext(Context);
    
    const changeShowImg = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, show: fineVisionShowImage) => {
        e.preventDefault();

        if(context){
            context.showImage.set(show);
            setCookie('showImg', show, {maxAge: 365 * 24 * 60 * 60, path: './'});  
        }
    }

    return (            
        <div className="header__showImage">
            <div className="header__subtittle">
                Изображения
            </div>
            <div>
            <Button 
                variant="contained"
                onClick={(e) => changeShowImg(e, "show")}               
            >
               Показать               
            </Button>
            <Button 
                variant="contained"
                onClick={(e) => changeShowImg(e, "dont-show")}               
            >
               Скрыть               
            </Button>
            <Button 
                variant="contained"
                onClick={(e) => changeShowImg(e, "white-black")}               
            >
               Перевести в ЧБ               
            </Button>
            </div>
        </div>)


}

export default HeaderBtnShowImg;
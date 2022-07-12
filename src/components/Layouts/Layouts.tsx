import { useContext, useEffect, useState } from "react";
import { Context } from "../../ThemeContext";
import * as React from 'react';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { getCookie } from 'cookies-next';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { classFineVision, classFineVisionShowImg, classFineVisionFontSize, classFineVisionMode  } from "../../types/types";


 const Layout: React.FC<{ children: ReactJSXElement }>  = ({children}) =>{
    const context = useContext(Context);  
    const [classes, setClasses] = useState<string>("");  

    useEffect(()=>{
      // Обновили контекст с помощью куки
      updateContextWithCookie();
    },[]);

    useEffect(()=> {       
        setClasses(getUnionFineVisionClasses());        
    }, [context]);


    function getClassFineVision(): classFineVision{
      
      if (context?.themeMain.name === "fineVision"){
        return "fineVision"
      } else{  
        return ""
      }
    }

    function getClassShowImg(): classFineVisionShowImg{
      if (context?.themeMain.name === "fineVision"){
        switch (context.showImage.show){
          case "white-black" :
            return "fineVision__white-black";
          case "dont-show" :
            return "fineVision__dont-show";
          default:
            return "";
        }
      } else{
        return ""
      }
    }

    function getClassFonSize():classFineVisionFontSize{
      if (context?.themeMain.name === "fineVision"){
        switch (context?.fontSize.size){
          case 150 :
            return "fineVision__150";
          case 200 : 
            return "fineVision__200";
          default: 
            return "";
        }
      }else{
        return "";
      }
    }

    function getClassMode(): classFineVisionMode{
      if (context?.themeMain.name === "fineVision"){
        switch (context.fineVisionMode.mode){
          case "dark" :
            return "fineVision__dark"
          default:
            return "" 
        }
      } else{
        return "";
      }
    }

    function getUnionFineVisionClasses(): string{
      const classFineVision = getClassFineVision();
      const classFineVisionShowImg = getClassShowImg();
      const classFineVisionFontSize = getClassFonSize();
      const classFineVisionMode = getClassMode();
     
      const classesUnion = [classFineVision, 
        classFineVisionShowImg, 
        classFineVisionFontSize, 
        classFineVisionMode]
        .join(" ")
        .trim();

        return classesUnion;
    }

    function updateContextWithCookie(): void{
      if (getCookie("theme") === "fineVision"){
        context?.themeMain.set("fineVision")
      }

      switch(getCookie("fontSize")){
        case "150":
          context?.fontSize.set(150);
          break
        case "200":
          context?.fontSize.set(200);
          break;
      }

      switch(getCookie("mode")){
        case "dark" :
          context?.fineVisionMode.set("dark");
          break;
        case "light": 
          context?.fineVisionMode.set("light");
          break;
      }

      switch(getCookie("showImg")){
        case "dont-show" :
          context?.showImage.set("dont-show");
          break;
        case "show" : 
          context?.showImage.set("show");
          break;
        case "white-black" :
          context?.showImage.set("white-black")
          break;
      }
    }
     

  return (
    <div className={classes}>
      <Header />
        <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout;
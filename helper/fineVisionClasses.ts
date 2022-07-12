import { getCookie } from 'cookies-next';
import { classFineVision, classFineVisionFontSize, classFineVisionMode, classFineVisionShowImg, IContext } from "../src/types/types";

const updateContextWithCookie = (context: IContext | null): void => {
 

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

const getUnionFineVisionClasses = (context: IContext | null): string => {    

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
}



export {updateContextWithCookie, getUnionFineVisionClasses};

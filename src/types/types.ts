export type themeNames = "standard" | "fineVision";
export type fineVisionMode = "light" | "dark";
export type fontSizes = 100 | 150 | 200;
export type fineVisionShowImage = "show" | "dont-show" | "white-black"

export type classFineVision = "" | "fineVision";
export type classFineVisionShowImg = "" | "fineVision__dont-show" | "fineVision__white-black"; 
export type classFineVisionFontSize = "" | "fineVision__150" | "fineVision__200";
export type classFineVisionMode = "" | "fineVision__dark"; 

export interface ITheme{ 
  name: themeNames,
  set: React.Dispatch<React.SetStateAction<themeNames>>
}

export interface IFontSize{
  size: fontSizes,
  set: React.Dispatch<React.SetStateAction<fontSizes>>
}

export interface IFineVisionMode{
  mode: fineVisionMode,
  set: React.Dispatch<React.SetStateAction<fineVisionMode>> 
}

export interface IShowImage{
  show: fineVisionShowImage,
  set: React.Dispatch<React.SetStateAction<fineVisionShowImage>> 
}

export interface IContext{  
    themeMain: ITheme,
    fontSize: IFontSize, 
    fineVisionMode: IFineVisionMode,
    showImage: IShowImage  
}

export interface IImage{
  url: string,
  alt?: string
} 



export interface IItem {
    name: string,
    classModify: 
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

export interface IData { // За ассинхронные полученные данные
    data: {
      title: string
    }  
}

  
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import React, { useContext } from "react";
import { Context } from "../../src/ThemeContext";
import { fineVisionShowImage, IImage } from "../../src/types/types"

const Image: React.FC<IImage> = (props) =>{

    const {url, alt} = props;
    const context = useContext(Context);

    const imgClass = getImageClass(context?.showImage.show);
    const upadateAlt = getAlt(alt);

    const Content = () => {
        if (context?.themeMain.name ==="fineVision" && context?.showImage.show === "dont-show"){

            return (
                <div className="modules-image_text-block">
                    {upadateAlt}
                </div>
            )
        }else{
            return (
                <img 
                src={url} 
                alt={upadateAlt} 
                className={imgClass}
                />
            )
        }
    }
    
    function getImageClass(show?: fineVisionShowImage ){
        switch (show){
            case "dont-show": 
                return "modules-image_dont-show";
            case "white-black":
                return "modules-image_white-black";
            default: 
                return "";
        }
    }

    function getAlt (alt?: string): string{
        if(!alt)
            return "У изображения нет описания";
        
        if (alt.length > 256){
            return `${alt.slice(0,255)}...`;
        }

        return alt;
    }



    return(
        <Content />
    )
}

export default Image
 

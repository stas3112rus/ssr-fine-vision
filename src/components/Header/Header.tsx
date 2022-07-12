import React, { useContext } from "react";
import { Context } from "../../ThemeContext";
import { Container } from "@mui/system";
import HeaderStandard from "./HeaderStandard";
import HeaderFineVision from "./HeaderFineVision";
import { setCookie } from 'cookies-next';



const Header: React.FC = () => {
   
    const context = useContext(Context);
    
    function changeTheme (e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        e.preventDefault(); 
            
        if (context){
            const currentTheme = context.themeMain.name === "standard" ? "fineVision" : "standard";
            context.themeMain.set(currentTheme);
            setCookie('theme', currentTheme, {maxAge: 365 * 24 * 60 * 60, path: './'});          
        } 
    }


    return (
        <div className={"header"}>
            <Container sx={{minHeight: "inherit"}}>
                {
                    context?.themeMain.name === "fineVision" ? 
                        <HeaderFineVision changeTheme={changeTheme}/> : 
                        <HeaderStandard changeTheme={changeTheme}/>
                }
            </Container>
        </div>
    )

}

export default Header;
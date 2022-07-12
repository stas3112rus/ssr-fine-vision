import { useContext, useEffect, useState } from "react";
import { Context } from "../../ThemeContext";
import * as React from 'react';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { getUnionFineVisionClasses, updateContextWithCookie } from "../../../helper/fineVisionClasses";


 const Layout: React.FC<{ children: ReactJSXElement }>  = ({children}) =>{
    const context = useContext(Context);  
    const [classes, setClasses] = useState<string>("");  

    useEffect(()=>{
      // Обновили контекст с помощью куков
      updateContextWithCookie(context);
    }, []);

    useEffect(()=> {       
        setClasses(getUnionFineVisionClasses(context));        
    }, [context]); 

  return (
    <div className={classes}>
      <Header />
        <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout;
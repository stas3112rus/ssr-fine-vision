import * as React from 'react';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

 const Layout: React.FC<{ children: ReactJSXElement }>  = ({children}) =>{
  return (
    <>
      <Header />

      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout;
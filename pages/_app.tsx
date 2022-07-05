import React, { useState } from "react";
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import {theme} from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';

import { Context } from '../src/ThemeContext';
import { themeNames } from "../src/types/types";

import Layout from '../src/components/Layouts/Layouts';


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  // храним название темы
  const [context, setContext] = useState<themeNames >("lightTheme");
  
  return (
    <Context.Provider value={{theme: context, set: setContext}}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Layout> 
            <Component {...pageProps} />
          </Layout>      
        </ThemeProvider>
      </CacheProvider>
    </Context.Provider>
    
  );
}

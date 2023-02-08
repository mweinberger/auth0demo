import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import createEmotionCache from "../utils/createemotioncache";
import lightThemeOptions from "../styles/theme/light";

import Layout from '../components/Layout';

import '@fortawesome/fontawesome-svg-core/styles.css';
import initFontAwesome from '../utils/initFontAwesome';
import '../styles/globals.css';


const clientSideEmotionCache = createEmotionCache();

const lightTheme = createTheme(lightThemeOptions);

initFontAwesome();

export default function App({ Component, pageProps, emotionCache = clientSideEmotionCache }) {
  return (
  <CacheProvider value={emotionCache}>
   <ThemeProvider theme={lightTheme}>
	  <CssBaseline/>
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  </ThemeProvider>
 </CacheProvider>
  );
}

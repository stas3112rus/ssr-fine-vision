import { createTheme } from '@mui/material/styles';
import { orange, green, blue, pink, yellow, red, brown } from '@mui/material/colors';



declare module '@mui/material/styles' {

  type ThemeType = {
    backColor: string,
    fontColor: string,
    main: string,
    primary: string,
    secondary:  string,
    error:  string,
    danger:  string,
    dark:  string
    light:  string,
    lovely:  string
    grossy:  string,
    temporary: string 
  }

  type ThemeOptionsType = {
    backColor?: string,
    fontColor?: string,
    main?: string,
    primary?: string,
    secondary?:  string,
    error?:  string,
    danger?:  string,
    dark?:  string
    light?:  string,
    lovely?:  string
    grossy?:  string,
    temporary?: string 
  }

  interface Theme {
    lightTheme: ThemeType,
    darkTheme: ThemeType
  }

  // allow configuration using `createTheme`
  interface ThemeOptions {
    lightTheme?: ThemeOptionsType,
    darkTheme?: ThemeOptionsType
  }  
}

const theme = createTheme({
    lightTheme: {
      backColor: "#FFFFCC",
      fontColor: "black",
      main: blue[100], 
      danger: orange[100],
      primary: pink[100],
      secondary:  yellow[100],
      error:  red[100],
      dark:  brown[100],
      light:  blue[100],
      lovely:  green[100],
      grossy:  red[100],
      temporary: pink[100] 
    },
    darkTheme: {
      backColor: "#330033",
      fontColor: "white",
      main: blue[900], 
      danger: orange[900],
      primary: pink[900],
      secondary:  yellow[900],
      error:  red[900],
      dark:  brown[900],
      light:  blue[900],
      lovely:  green[900],
      grossy:  red[900],
      temporary: pink[900] 
    }
  });

export default theme;
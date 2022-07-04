type themeNames = "lightTheme" | "darkTheme";

export interface themeContext{
    theme: themeNames,
    set: React.Dispatch<React.SetStateAction<themeNames>>
}

export interface IItem {
    name: string,
    currentTheme: themeNames | null,
    color: 
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

export interface IData { 
    data: {
      title: string
    }  
  }
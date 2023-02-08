import { ThemeOptions } from "@mui/material/styles";

const lightThemeOptions = {
	  palette: {
		      mode: "light",
		      primary: {
			            dark: "#3D0F58",
			            main: "#551B76",
			          },
		      text: {
			            primary: "#23315A",
			            secondary: "#727A92",
			          },
		      secondary: {
			            main: "#E8EAED",
			          },
		      background: {
			            paper: "#fff",
			            default: "#fff",
			          },
		    },
	  typography: {
		      fontFamily: ["Kanit", "sans-serif"].join(","),
		    },
};

export default lightThemeOptions;

import { createTheme, ThemeProvider } from "@mui/material/styles";

const PRIMARY_COLOR_CYAN = "#64c9d1";
const PRIMARY_COLOR_GRAY = "#a3aaad";
const SECONDARY_COLOR_WHITE = "#ffffff";

const customTheme = createTheme({
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: SECONDARY_COLOR_WHITE,
          "&.Mui-checked": {
            color: PRIMARY_COLOR_CYAN,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "&.MuiInput-root:before": {
            borderColor: PRIMARY_COLOR_GRAY,
          },
          "&.MuiInput-root:after": {
            borderColor: PRIMARY_COLOR_CYAN,
          },
          "&.MuiInput-root-MuiSelect-root:before": {
            borderColor: PRIMARY_COLOR_GRAY,
          },
        },
        input: {
          color: SECONDARY_COLOR_WHITE,
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          "&.MuiSelect-icon": {
            color: SECONDARY_COLOR_WHITE,
          },
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          marginBottom: "1rem",
        },
      },
    },
  },
});

export const CustomThemeProvider = ({ children }) => (
  <ThemeProvider theme={customTheme}>{children}</ThemeProvider>
);

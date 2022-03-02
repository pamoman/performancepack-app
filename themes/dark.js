import { createTheme } from '@mui/material/styles';

/*
 * Create the main Theme
 */
const theme = createTheme({
    palette: {
        primary: {
            main: "rgb(255, 255, 255)",
        },
        secondary: {
            main: 'rgb(0, 0, 0)',
        },
        background: {
            light: 'rgb(18, 29, 38, 0.8)',
            main: 'rgb(18, 29, 38, 1)',
            dark: 'rgb(6, 13, 19, 1)',
        },
        button: {
            primary: {
                main: "rgb(255, 255, 255)",
                background: {
                    light: "rgb(229, 0, 1, 0.7)",
                    main: "rgb(229, 0, 1, 1)",
                },
            },
            secondary: {
                main: "rgb(255, 255, 255)",
                background: {
                    light: "rgb(249, 103, 45, 0.7)",
                    main: "rgb(249, 103, 45, 1)",
                },
            },
        },
        iconButton: {
            primary: {
                disabled: "rgb(150, 150, 150)",
                light: "rgb(255, 255, 255, 0.8)",
                main: "rgb(255, 255, 255, 1)",
                background: {
                    light: 'rgb(18, 29, 38, 0.4)',
                    main: 'rgb(18, 29, 38, 0.6)',
                    dark: 'rgb(6, 13, 19, 0.8)',
                }
            },
            secondary: {
                disabled: "rgb(150, 150, 150)",
                light: "rgb(0, 0, 0, 0.7)",
                main: "rgb(0, 0, 0, 1)",
            },
        },
        border: {
            primary: {
                main: "rgb(38, 45, 52)",
            },
            secondary: {
                main: "rgb(14, 125, 255)",
            },
        },
        formInput: {
            main: "rgb(0, 0, 0)",
            background: "rgba(250, 250, 250)",
            disabled: "rgb(220, 220, 220)",
        },
        tableBackground: {
            light: "rgba(60, 60, 60, 0.8)",
            main: "rgba(60, 60, 60, 0.6)",
            dark: "rgba(70, 70, 70, 0.4)",
        },
        paper: {
            light: "rgb(255, 255, 255)",
            main: "rgb(240, 240, 240)",
            dark: "rgb(220, 220, 220)"
        },
        figcaption: {
            color: {
                primary: "rgb(240, 240, 240)",
                secondary: "rgb(255, 255, 255)",
            },
            background: {
                primary: "rgb(104, 104, 104)",
                secondary: "rgb(0, 0, 0)",
            },
            props: {
                padding: "1rem",
            }
        },
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
    layout: {
        header: {
            height: 90
        },
        hero: {
            height: 400,
        },
        footer: {
            mobile: {
                height: 90
            },
            desktop: {
                height: 90
            }
            
        }
    }
});

/*
 * Perform component overrides and merge with theme
 */
const overrides = {
    components: {
        MuiTypography: {
            styleOverrides: {
                h1: {
                    [theme.breakpoints.down('md')]: {
                        fontSize: "4rem"
                    },
                },
                h2: {
                    [theme.breakpoints.down('md')]: {
                        fontSize: "3rem"
                    },
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    "&$focused:not($error)": {
                        color: theme.palette.secondary.main,
                    },
                },
            },
        },
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    "&$focused": {
                        backgroundColor: theme.palette.formInput.background,
                        borderRadius: "0.4rem",
                    },
                },
                input: {
                    borderRadius: "0.4rem",
                    backgroundColor: theme.palette.formInput.background,
                    "&$disabled": {
                        borderRadius: 0,
                        backgroundColor: theme.palette.formInput.disabled,
                    },
                    '&:hover:before': {
                        backgroundColor: theme.palette.formInput.background,
                        borderRadius: "0.4rem",
                    },
                },
                underline: {
                    '&:before': {
                        borderBottom: `2px solid ${theme.palette.formInput.background}`
                    },
                    '&:after': {
                        borderBottom: `2px solid ${theme.palette.border.secondary.main}`,
                    },
                    "&$disabled:before": {
                        borderBottom: `2px solid ${theme.palette.formInput.disabled}`
                    },
                    '&:hover:before': {
                        borderBottom: `2px solid ${theme.palette.formInput.background}`
                    },
                },
            },
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    textDecoration: "none"
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    display: "flex",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    border: "none",
                    "&.center": {
                        margin: "0 auto",
                    },
                },
                sizeLarge: {
                    fontSize: "1rem",
                    width: "14rem",
                    height: "3rem",
                },
                containedPrimary: {
                    color: theme.palette.button.primary.main,
                    backgroundColor: theme.palette.button.primary.background.light,
                    "&:hover": {
                        backgroundColor: theme.palette.button.primary.background.main,
                    },
                    "&:disabled": {
                        backgroundColor: theme.palette.button.primary.background.light,
                        color: "white",
                    },
                },
                containedSecondary: {
                    backgroundColor: theme.palette.button.secondary.background.light,
                    color: theme.palette.button.secondary.main,
                    "&:hover": {
                        backgroundColor: theme.palette.button.secondary.background.main,
                    },
                    "&:disabled": {
                        backgroundColor: theme.palette.button.secondary.background.light,
                        color: "white",
                    },
                },
                textPrimary: {
                    color: theme.palette.iconButton.primary.light,
                    "&:hover": {
                        backgroundColor: "inherit",
                        color: theme.palette.iconButton.primary.main,
                    },
                },
            },
        },
        MuiButtonGroup: {
            styleOverrides: {
                root: {
                    margin: "1rem",
                    "& button": {
                        width: "8rem"
                    }
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    borderRadius: "none"
                },
                colorPrimary: {
                    color: theme.palette.iconButton.primary.light,
                    "&:hover": {
                        backgroundColor: "inherit",
                        color: theme.palette.iconButton.primary.main,
                    },
                },
                colorSecondary: {
                    color: theme.palette.iconButton.secondary.light,
                    "&:hover": {
                        backgroundColor: "inherit",
                        color: theme.palette.iconButton.secondary.main,
                    },
                },
            },
        },
        MuiFab: {
            styleOverrides: {
                root: {
                    position: 'fixed',
                    bottom: 100,
                    left: 20,
                },
                primary: {
                    color: theme.palette.button.primary.main,
                    backgroundColor: theme.palette.button.primary.background.light,
                    "&:hover": {
                        backgroundColor: theme.palette.button.primary.background.main,
                    },
                },
            },
        },
        MuiAvatar: {
            styleOverrides: {
                colorDefault: {
                    backgroundColor: "none",
                },
            },
        },
        MuiTabPanel: {
            styleOverrides: {
                root: {
                    padding: 0
                },
            },
        },
    },
};

/*
 * Perform global overrides
 */
export const globalStyle = {
    html: {
        WebkitFontSmoothing: 'antialiased',
        overflowX: "hidden",
        overflowY: "auto",
    },
    body: {
        overflowX: "hidden",
        overflowY: "auto",
        backgroundColor: theme.palette.background.main,
        color: theme.palette.primary.main
    },
    table: {
        "& .collapsed-table": {
            marginBottom: "1rem",
            "&:last-child": {
                marginBottom: "2rem",
            }
        },
        "& .collapsed-cell": {
            paddingBottom: 0,
            paddingTop: 0
        },
    },
    figure: {
        display: 'block',
        margin: 0
    },
    a: {
        cursor: "pointer"
    },
    ".clickable": {
        cursor: "pointer"
    },
    ".center": {
        textAlign: "center"
    },
    "::-webkit-scrollbar": {
        width: "0px", /* Remove scrollbar space */
        background: "transparent",  /* Make scrollbar invisible */
    },
    ".banner": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        width: "100%",
        height: "200px",
        textAlign: "center",
        backgroundColor: theme.palette.background.main,
        backgroundPosition: "50% 65%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        "& h1": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgb(0, 0, 0, 0.6)",
            color: theme.palette.primary.main,
            width: "100%",
            height: "100%"
        }
    },
    ".gutter-bottom": {
        marginBottom: theme.spacing(4),
    },
    ".form": {
        width: "100%",
        margin: "auto",
        "& .MuiTextField-root": {
            width: "100%",
            margin: theme.spacing(2, 0),
            "&.password": {
                marginBottom: "0.25rem",
            },
        },
        "& button": {
            margin: theme.spacing(2, "auto"),
        },
        [theme.breakpoints.up('sm')]: {
            maxWidth: "24rem",
        },
    },
    ".table-container": {
        "& .table": {
            "& tr": {
                backgroundColor: theme.palette.tableBackground.main,
                "&:nth-of-type(even)": {
                    backgroundColor: theme.palette.tableBackground.light,
                },
            },
            "& th": {
                backgroundColor: theme.palette.background.dark,
                color: theme.palette.primary.main,
            },
            "& td": {
                color: theme.palette.primary.main,
                "&.overdue": {
                    color: theme.palette.error.main,
                },
            },
        },
    },
    ".table-container-paper": {
        backgroundColor: theme.palette.paper.main,
        "& .table": {
            "& th": {
                color: theme.palette.secondary.main,
                fontWeight: "normal",
                fontSize: "1.5rem",
            },
            "& td": {
                color: theme.palette.secondary.main,
                fontWeight: "bold",
                fontStyle: "italic",
                fontSize: "1.5rem",
            },
        },
    },
};

export default createTheme(theme, overrides);
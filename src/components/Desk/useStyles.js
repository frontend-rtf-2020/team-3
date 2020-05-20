import {  makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    linkstyle:{
      underline: "none",
      color: "white",
      paddingRight: 30,
      fontSize: 20
    },
    appbarstyle:{
      elevation: 0,
      
    },
    
    descrstyle:{
      /*высоту надо будет высчитывать исходя из длины/высоты текста */
      height: "100px",
    },

    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    btnclr1:{
      color: "white",
      height: "10px",
    },

    root1: {
      width: '100%',
      borderRadius: 20,
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    icon: {
      verticalAlign: 'bottom',
      height: 20,
      width: 20,
    },
    details: {
      alignItems: 'center',
    },
    column: {
      
      
    },
    helper: {
      borderLeft: `2px solid ${theme.palette.divider}`,
      padding: theme.spacing(1, 2),
    },
    link: {
      color: theme.palette.primary.main,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    
  }));
  
  export default useStyles;
import { container, title } from "../../../material-kit-react.js";
import headerLinksStyle from "../../components/headerLinksStyle.js";

const navbarsStyle = theme => ({
  section: {
    paddingTop: "0",
    height:'100vh',
  },
  legal: {
    paddingTop: "0",
    height:'40vh',
    maxWidth:"100%"
  },
  container,
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  navbar: {
    marginBottom: "-20px",
    zIndex: "100",
    position: "relative",
    overflow: "hidden",
    "& header": {
      borderRadius: "0"
    }
  },
  nav_button :{
    background: 'transparent',
    border: 0,
    borderRadius: 30,
    // boxShadow: '0 3px 5px 2px rgba(255, 255, 255, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    "&:hover,&:focus": {
      color: "white",
      background: "rgba(200, 200, 200, 0.2)"
    },
  },
  nav_button_responsive :{
    background: 'transparent',
    border: 0,
    borderRadius: 30,
    // boxShadow: '0 3px 5px 2px rgba(255, 255, 255, .3)',
    color: 'black',
    height: 48,
    padding: '0 30px',
    "&:hover,&:focus": {
      color: "black",
      background: "rgba(200, 200, 200, 0.2)"
    },
  },
  header_text:{
    paddingTop:200,
    color:'white',
    wordWrap:'break-word',
    textTransform: 'uppercase',
    fontSize:50,
    fontWeight:'bold',
    fontFamily:"Uchen"
  },
  subtitle_text:{
    textTransform: 'uppercase',
    color:'white',
    fontSize:20,
    paddingBottom:30,
    fontFamily:"Uchen"
  },
  other_text:{
    color:'white',
    wordWrap:'break-word',
    textTransform: 'uppercase',
    fontSize:50,
    fontWeight:'bold',
    paddingBottom:'20px',
    paddingTop:'20px',
    fontFamily:"Uchen"
  },
  explore :{
    background: 'rgba(128,128,128,0.3)',
    border: 0,
    borderRadius: 30,
    // boxShadow: '0 3px 5px 2px rgba(255, 255, 255, .3)',
    color: 'white',
    height: 48,
    position: 'absolute',
    top: '80',
    left: '50%',
    fontFamily:"Uchen",
    msTransform: 'translate(-50%, -50%)',
    transform: 'translate(-50%, -50%)',
    "&:hover,&:focus": {
      color: "inherit",
      background: "rgba(200, 200, 200, 0.2)"
    },
  },
  form_button:{
      borderRadius:30,
      float:'right',
      background:'rgba(200, 200, 200,0.3)',
      "&:hover,&:focus": {
        color: "inherit",
        background: "rgba(200, 200, 200, 0.2)"
      },
  },
  formControl: {
    margin: "0 !important",
    paddingTop: "0",
    direction:'rtl'
  },
  inputRootCustomClasses: {
    margin: "0!important",
    display: 'block',
    direction: 'ltr'
  },
  textfield:{
    paddingLeft:"400",
    margin:"0",
    color:'white',
    float:'right',
  },
  herocontainer:{
    justifyContent:'center',
    textAlign:'center',
  },
  searchIcon: {
    width: "20px",
    height: "20px",
    color: "inherit",
    position:'right',
    padding: "70px 0"
  },
  ...headerLinksStyle(theme),
  img: {
    width: "40px",
    height: "40px",
    borderRadius: "50%"
  },
  imageDropdownButton: {
    padding: "0px",
    top: "4px",
    borderRadius: "50%",
    marginLeft: "25px"
  }
});

export default navbarsStyle;


import { makeStyles } from '@material-ui/core/styles';
import icono from '../../../images/sakura.png'

export default makeStyles((theme)=>({
   paper: {
    margin:100,
    position: 'absolute',
    display:'flex',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    borderRadius:'15px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    zIndex:'1',
  },
  card2: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '210px',
    position: 'relative',
    zIndex:'1',
    backgroundImage: `linear-gradient(rgba(255,255,255,1), rgba(255,255,255,1)),url(${icono})`, 
    backgroundSize:'cover',
    margin:'1px',
  },
  cardLista:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    zIndex:'1',
  },
  overlay: {
    position: 'relative',
    top: '20px',
    left: '20px',
    color: 'red',
  },
  overlayEdit: {
    position: 'absolute',
    top: '3%',
    right: '75px',
    color: 'red',
  }, 
  overlayDelete: {
    position: 'absolute',
    bottom: '3%',
    right: '75px',
    color: 'red',
  },
    overlay3: {
    position: 'relative',
    bottom: '-20px',
    left: '20px',
    color: 'rgba(205,92,92 ,1)',
    fontWeight:'bolder',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 0px 10px 20px ',

  },
  title: {
    paddingLeft:'20px',
    zIndex:'1',
    lineHeight:'18px',
    

  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    position:'relative',
    justifyContent: 'space-between',
    background:'red',
  },
  a:{
    color:'black',
    textDecoration:'none',
    marginRight:'25px',
  },
  logo:{
    height:'100%',
    zIndex:'0',
    position:'absolute',
    opacity:'0.18',
    left:'33%',
  },
  flexprecios:{
    display:'flex',flexDirection:'column',justifyContent:'space-around',height:'100%'
  },
  none:{
    display:'none'
  },
}));
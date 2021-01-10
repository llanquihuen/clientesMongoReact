
import { makeStyles } from '@material-ui/core/styles';
import icono from '../../../images/sakura.png'

export default makeStyles({
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
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    zIndex:'1',
  },
  card2: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '210px',
    position: 'relative',
    zIndex:'1',
    backgroundImage: `linear-gradient(rgba(255,255,255,1), rgba(255,255,255,.8)),url(${icono})`, 
    backgroundSize:'cover',
    margin:'1px',

  },
  overlay: {
    position: 'relative',
    top: '20px',
    left: '20px',
    color: 'red',
  },
  overlay2: {
    position: 'relative',
    top: '-10%',
    left: '85%',
    color: 'red',
  },
    overlay3: {
    position: 'relative',
    top: '20px',
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

  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  a:{
    color:'black',
    textDecoration:'none',
  },
  logo:{
    height:'100%',
    zIndex:'0',
    position:'absolute',
    opacity:'0.18',
    left:'33%',

 

  }
});

import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    width:'70%',
  },
  heading: {
    color: 'rgba(255,192,203 ,1 )',
  },
  image: {
    marginLeft: '15px',
  },
  // [theme.breakpoints.down('sm')]:{
  //   mainContainer:{
  //     flexDirection:"column-reverse",
      
  //   }
  // }
  container: {
    display: 'flex',
    justifyContent: 'space-around',

  }
}));
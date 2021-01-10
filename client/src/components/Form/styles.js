
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(.5),
    },
     
  },
  
  paper: {
    padding: theme.spacing(2),
    display:'flex',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
    display:'flex',
    flexDirection:'column',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  botonAzul:{
    borderColor:'red'
  },

}));
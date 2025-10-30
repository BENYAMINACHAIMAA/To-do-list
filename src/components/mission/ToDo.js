
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import Grid from '@mui/material/Grid';
import { useContext } from 'react';
import { TodosContext } from '../../todoscontext';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
export default function ToDo({todo, handelCHeck}){
  const {todos , setTodos} = useContext(TodosContext)
  const [showDeleteDialoge, setshowDeleteDialoge]  = useState(false);
    const [showUpdateDialoge, setshowUpdateDialoge]  = useState(false);
    const [updatedTodo , setUpdatedTodo] = useState({titel : todo.titel , detailes : todo.detailes})

  //EVENET HANDELERS
  

  const handleClickOpen = () => {
    setshowDeleteDialoge(true)
  };

// the check EVENT HANDELERS
  function handelcheckclick( ){
const updatedTodos= todos.map((t)=>{
  if(t.id===todo.id){
    t.isCompleted = !t.isCompleted
  }
  return t 
})
setTodos(updatedTodos)
localStorage.setItem("todos" , JSON.stringify(updatedTodos))
  }

// THE DELETE EVENT HANDELERES
  function handleDeleteConfirme(id){
const updatedTodos = todos.filter((t) => t.id !== id);
  setTodos(updatedTodos);
  localStorage.setItem("todos" , JSON.stringify(updatedTodos))
}

  const handleDeleteDialogClose = () => {
    setshowDeleteDialoge(false)
  }; 
// THE UPDATE EVENT HANDELERES
  const handleUpdateDialogClose = () => {
    setshowUpdateDialoge(false)
  };

  function handleUpdateConfirme(id){
  const updatedTodos= todos.map((t)=>{
    if(t.id === id){
      return {...t, titel:updatedTodo.titel , detailes:updatedTodo.detailes} 
    }else{return t }
  })
setTodos(updatedTodos)
setshowUpdateDialoge(false)
localStorage.setItem("todos" , JSON.stringify(updatedTodos))
}
  const handelUpdateClickOpen = () => {
    setshowUpdateDialoge(true)
  };
return(
  <>
  {/* DELETE MODEL */}
  <Dialog
  onClose={handleDeleteDialogClose}
        open={showDeleteDialoge}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"ARE YOU SURE YOU WANT DELETE THIS TODO?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            YOU CAN NOT GO BACK AFTER DELETING
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteDialogClose} >GO BACK</Button>
          <Button onClick={()=>{ handleDeleteConfirme(todo.id)}} autoFocus>
            <DeleteIcon />
          </Button>
        </DialogActions>
      </Dialog>
    {/* DELETE MODEL */}


    {/* update MODEL */}
  <Dialog
  onClose={handleUpdateDialogClose}
        open={showUpdateDialoge}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Update the ToDo"}
        </DialogTitle>
        <DialogContent>
          <TextField
           autoFocus
           margine="dense"
           id="name"
           label = "titel"
           type='text'
           fullWidth
           variant='standard'
           value={updatedTodo.titel}
           onChange={(e)=>{
            setUpdatedTodo({...updatedTodo , titel:e.target.value})
           }}
           ></TextField>
          
          <TextField
           autoFocus
           margine="dense"
           id="name"
           label ="datailes"
           type='text'
           fullWidth
           variant='standard'
           value={updatedTodo.detailes}
           onChange={(e)=>{
            setUpdatedTodo({...updatedTodo , detailes:e.target.value})}}

           >
           </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUpdateDialogClose} >GO BACK</Button>
          <Button onClick={()=>{ handleUpdateConfirme(todo.id)}} autoFocus>
          confirm
          </Button>
        </DialogActions>
      </Dialog>
    {/* update MODEL */}


  <Card sx={{ minWidth:275, transition:"transform 0.2s" , color: 'white',margin:"10px" , "&:hover":{ paddingTop:"10px"  , paddingBottom:"10px" ,  transition:  "all 0.2s !important" , boxShadow: "0px 7px 7px rgba(0 , 0 , 0 ,0.4)"} ,backgroundColor:"#112989ff" , dispaly : "flex"  , flexDirection:"column"} }>
      <CardContent >
        
        <Grid container spacing={2}>
        <Grid size={8}>
          <Typography gutterBottom variant='h5' sx={{ textDecoration: todo.isCompleted?"line-through" :"none"}}>
      {todo.titel}
        </Typography>

        <Typography gutterBottom variant='h6'>
    {  todo.detailes}
        </Typography>
        </Grid>


        <Grid size={4} sx={{display:"flex" , justifyContent:"space-around" , alignItems:"center"}}>
          {/* THE ACTIONS BUTTONS */}
  {/* the DELETE BUTTON */}  
  <IconButton onClick={handleClickOpen} className='iconButton'  sx={{color:'red' , backgroundColor:'white',border:"1px solid red" }}  aria-label="delete">
  <DeleteIcon />
</IconButton>
{/* the DELETE BUTTON*/}
{/*check iconButton*/}
<IconButton onClick={()=>{
  handelcheckclick()

}} className='iconButton' sx={{color:  todo.isCompleted ? "white " : 'green' , backgroundColor: todo.isCompleted ?  "green " : 'white' ,border:"1px solid green"}}>
  <CheckRoundedIcon />
</IconButton>
{/*check iconButton*/}


<IconButton className='iconButton' onClick={handelUpdateClickOpen} sx={{color:"#1769aa" , backgroundColor:'white' ,border:"1px solid #1769aa"}}>
  <ModeEditOutlineRoundedIcon />
</IconButton>
  {/* THE ACTIONS BUTTONS */}
        </Grid>
        
      </Grid>
      </CardContent>
      <CardActions>
        

      </CardActions>
    </Card>
  </>
)
}
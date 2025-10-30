import * as React from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Container from '@mui/material/Container'
import { Divider } from '@mui/material';
import ToDo from '../mission/ToDo'
import Grid from '@mui/material/Grid';
import { v4 as uuidv4 } from 'uuid';
import { useContext  , useEffect , useState} from 'react';
import { TodosContext  } from '../../todoscontext';


export default function ToDoList(){
  const {todos , setTodos} = useContext(TodosContext)
  const [titelinput , settitelinput] = useState("")
  const[displayedTodosType , setDisplayedTodosType ] = useState("all")

useEffect(()=>{
  const storageTodos = JSON.parse(localStorage.getItem("todos")) ?? []; // bah nhar lwal ki tkon localstorage vide yjib had  []
  setTodos(storageTodos)
},[])


const completedTodos= todos.filter((t)=>{
    return t.isCompleted
  })

const uncompletedTodos= todos.filter((t)=>{
    return !t.isCompleted
  })
  let todostoberendered = todos
  
  if(displayedTodosType === "completed"){
    todostoberendered = completedTodos
  }else if(displayedTodosType === "non-completed"){
    todostoberendered=uncompletedTodos
  }

  const todosjsx = todostoberendered.map((t)=>{
    return <ToDo key={t.id}  todo={t} />
  })

  //filtring arrays
  
  function handelAddClick(){
    const newTodo={
id:uuidv4(),
titel : titelinput , 
detailes:"",
isCompleted : false
    }
    const updatedTodos = [...todos , newTodo]
setTodos(updatedTodos)
localStorage.setItem("todos" , JSON.stringify(updatedTodos))
settitelinput("")
  }

  //TODOS TYPE
  function changedisplaytype(e)
  {setDisplayedTodosType(e.target.value)}


  return(

<Container maxWidth="sm">
<Card sx={{minWidth:275 , 

  maxHeight:"80vh",
  overflow:"scroll"
}}>
  <CardContent >
<Typography variant='h2'> To Do List</Typography>
<Divider />
{/*Filter buttons */}
<ToggleButtonGroup style={{marginTop:"30px"}} color='primary' exclusive value={displayedTodosType} onChange={changedisplaytype}> 
<ToggleButton value="all" > All</ToggleButton>
<ToggleButton  value="completed" > Done</ToggleButton>
<ToggleButton  value= "non-completed"> undone</ToggleButton>
</ToggleButtonGroup>
{/*Filter buttons */}


{/* ALL TO DO  */}
{todosjsx}
{/* ALL TO DO  */}

{/* INPUT + ADD BUTTON  */}

<Grid container spacing={2} > {/*we use spacing to add sspace between elements */}
        <Grid size={8} >
    <TextField onChange={(e)=>{
      settitelinput(e.target.value)
    }} label=" the mission titel " style={{width:"100%"}} value={titelinput}></TextField>
        </Grid>
  {/* INPUT + ADD BUTTON  */}
        <Grid size={4} >
        <Button variant='contained' style={{width:"100%" , height:"100%"}} startIcon={<AddIcon/>}
        onClick={()=>{
          handelAddClick()
        }}
        disabled={titelinput.length==0  /* the todo titel must be more then 1 letter or we can not add it */} 
        
        >Add</Button>
        </Grid>
</Grid>

</CardContent>
</Card>
</Container>

  )
}
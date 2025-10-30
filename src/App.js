
import './App.css';
import { useState } from 'react';
import { TodosContext } from './todoscontext';
import ToDoList from   './components/interface/ToDoList'
import { v4 as uuidv4 } from 'uuid';
import { createTheme , ThemeProvider } from '@mui/material';

const theme = createTheme(
  {palette:
    {primary:{
      main:"#dd2c00"
    }}
  }
)
const initialtodos = [
    { id : uuidv4(),
      titel : "jkbkd",
      detailes:"ndlvncklnv",
      isCompleted:false
    },
    { id : uuidv4(),
      titel : "jkbkd",
      detailes:"ndlvncklnv",
      isCompleted:false
    },
    { id : uuidv4(),
      titel : "jkbkd",
      detailes:"ndlvncklnv",
      isCompleted:false
    }
  ]
function App() {
  
    
  const [todos , setTodos] = useState(initialtodos)

 return (
  <div style={{display:"flex" , alignItems:"center" , justifyContent: "center" , height:"100vh" , backgroundColor:"#191B1F"}}> 
  <ThemeProvider  theme={theme}>
<TodosContext.Provider  value={{todos , setTodos }}> {/* or todos:todos , setTodos : setTodos */}
<ToDoList />
</TodosContext.Provider>
</ThemeProvider>
</div>
)
}

export default App;

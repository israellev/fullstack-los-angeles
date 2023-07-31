import { Button, TextField } from "@mui/material";

function AddTodo(){
  return ( 
    <div>
        <TextField label="Add Todo"/>
        <Button variant="contained" color="primary">
         Add
        </Button>
    </div>
  );
  };




export default AddTodo;
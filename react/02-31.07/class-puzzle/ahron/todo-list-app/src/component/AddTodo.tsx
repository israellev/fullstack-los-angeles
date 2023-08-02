import { TextField } from "@mui/material";

const AddTodo: React.FC = () =>{

function AddTo(){
  return ( 
    <div>
        <TextField label="Add Todo"/>
        <button variant="contained" color="primary">
         Add
        </button>
    </div>
  );
  };
};



export default AddTodo;
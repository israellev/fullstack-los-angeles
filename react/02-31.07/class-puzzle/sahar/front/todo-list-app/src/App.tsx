import { Route, BrowserRouter, Routes} from 'react-router-dom';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
       <Route path ="/" Component={TodoList} />
       <Route path="/add" Component={AddTodo} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

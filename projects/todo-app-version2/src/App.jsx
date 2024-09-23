import AppName from "./components/AppName";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import './App.css';
import Item from "./components/Item";

function App() {
  const array=[
    {
      work:"Buy milk",
      date:"23/05/2024"

  },
  {
    work:"Go To School",
    date:"23/06/2024"

},
{
  work:"Eating Food",
  date:"24/06/2024"

}
]
  return (
  
     <center className="todo-container">
      <AppName />
      <TodoList/>
      <Item items={array}></Item>
     </center>
     
  )
}
   
export default App;

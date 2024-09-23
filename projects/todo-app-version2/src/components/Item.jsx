import TodoItem from "./TodoItem";
const Item =({items})=>{
  return (
    <>
      <div className="todoitems">
       {items.map(item=><TodoItem todowork={item.work} tododate={item.date}></TodoItem>)} 
     
  
      </div>
    </>
  )
}
export default Item;
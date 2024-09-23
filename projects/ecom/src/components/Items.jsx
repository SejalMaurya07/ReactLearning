
import FoodItems from "./FoodItems";

const Items=({item1})=>{
  return(
    <>
    <h1>Food Name</h1>
  <ul class="list-group">
   {item1.map((item)=>(
   <FoodItems item2={item}></FoodItems>
   ))}
</ul>
    </>
  )
}

export default Items;
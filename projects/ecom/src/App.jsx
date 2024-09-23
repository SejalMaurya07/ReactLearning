import Items from "./components/Items"


let foodItem=["Mango","Lichi","banana","Apple","Custerd Apple","Blueberry"];
function App(){
  return (
    <>
    <Items item1={foodItem}></Items>
    </>
  )
}
export default App;
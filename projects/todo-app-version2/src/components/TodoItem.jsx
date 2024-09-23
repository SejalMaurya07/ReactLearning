function TodoItem({todowork,tododate}){
  return <div  class="container">
  
  <div class="row sej-row">
  <div class="col-6">{todowork}</div>
  <div class="col-4"> {tododate}</div>
  <div class="col-2">
  <button type="button" class="btn btn-danger sej-button">Delete</button>
   </div>
   </div>
</div>

}

export default TodoItem;
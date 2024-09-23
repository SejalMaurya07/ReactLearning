function TodoList(){
  return <div class="container">
  <div class="row sej-row">
    <div class="col-6">
      <input type="text" placeholder="Enter Todo Here"/>
    </div>
    <div class="col-4">
      <input type="date"/>
    </div>
    <div class="col-2">
    <button type="button" class="btn btn-success first-button">Add</button>
    </div>
  </div>
</div>
}

export default TodoList;
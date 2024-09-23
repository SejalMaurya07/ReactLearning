const Button=()=>{

let buttonNames = ["C","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0","."
];
  
  return (
    <>
    <div className="button-container">
    {buttonNames.map((buttonNames)=>( <button className="btn">{buttonNames}</button>))}
          
        </div>
    </>
  )
}

export default Button;
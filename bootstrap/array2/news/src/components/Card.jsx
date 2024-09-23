import styles from "./Card.module.css"

function Card({arritems}){
 
       if (arritems.length === 0){
    return <h2>There is no upadated News</h2>
  }

  return   <ul className={`${styles["sej-list"]}`}>
    
     {arritems.map(item =><li  key={item} className={styles["group-item"]}>{item}</li>)}

  </ul>

}

export default Card;






//  let arrayitem=[];

  //  if (arrayitem.length === 0){
  //   return <h2>There is no upadated News</h2>
  // }


   {/* Ternary operatot
  {(arrayitem.length === 0)?<h3>There is no Updation of news</h3>:null} */}

  // {(arrayitem.length === 0)&&<h3>Theres is no update</h3>}
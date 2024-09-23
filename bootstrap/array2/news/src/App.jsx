
import './App.css'
import Card from './components/Card'
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  let cardmessage=" No Votes for the Yamuna: Delhi's Citizens Appeal to Political Parties to Let the River Flow"
   let arrayitem=['Job Details','Exam Details','Current Affairs','Government Job']
  // let arrayitem=[]
   

  return (
  <div class=" sej-card" >

     <Header item={cardmessage}></Header>
     <Card arritems={arrayitem}></Card> 
     <Footer></Footer>
  </div>  
 
  )
}

export default App

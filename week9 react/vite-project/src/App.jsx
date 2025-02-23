import { useState,useEffect } from "react"


function App() {
  return (<div>
          <Greeting username='abhishek' />
          <Header />     
          </div>
                  
);

}


const Header=() =>{
  const [currentTab,setCurrentTab] = useState(1)
  const [tabData,setTabData] = useState({})
  const [showLoader,setShowLoader] = useState(true)


  const handleClick = function clicked(tabnumber){
    return setCurrentTab(tabnumber)
  }
  useEffect(
    function (){
      setShowLoader(true)
      fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab)
      .then(async res => {
        const json = await res.json();
        setTabData(json);
        setShowLoader(false)

      })
      
    },[currentTab]
  )
  return <div>
    <button onClick={()=> handleClick(1)} style={{color: currentTab == 1 ? "red": "black", cursor:"pointer"}}>todo1</button>
    <button onClick={()=> handleClick(2)} style={{color: currentTab == 2 ? "red": "black", cursor:"pointer"}}>todo2</button>
    <button onClick={()=> handleClick(3)} style={{color: currentTab == 3 ? "red": "black", cursor:"pointer"}}>todo3</button>
    <button onClick={()=> handleClick(4)} style={{color: currentTab == 4 ? "red": "black", cursor:"pointer"}}>todo4</button>
    <button onClick={()=> handleClick(5)} style={{color: currentTab == 5 ? "red": "black", cursor:"pointer"}}>todo5</button>

    <br />
    {showLoader ==true ? 'loading data' : tabData.title}
  </div>
}
const Greeting = ({username}) => {

  return <div>
    my name is {username}
  </div>
}


const Notification = () =>{
  const [initialCount,finalCount]=useState(0);
  function incrementCount (){
    finalCount((initialCount) => initialCount+1);

  }
  useEffect(
    function(){
      console.log('logged');
      
      setInterval(incrementCount,1000)
    },[]
  )
  return (
    <div style={{
      display: 'flex',

    }}>
      
      <div style={{
        padding: '10px',
      }}>
      {initialCount}
      </div>
      
    </div>
  )
}


export default App

let KgSecond = () => {

  let time=new Date()
  return <div className="content2">
    <p>This is the clock that shows the time in Bharat at all times</p>
    <p>This is the current date and time is  : {time.toLocaleDateString()} -{time.toLocaleTimeString()}</p>

  </div>

}

export default KgSecond;
import React, {useState} from "react";
import Tweet from "./Tweet";

function App(){
const [users, setUsers] = useState([
  {name: "Will", message: "What's Up?" },
  {name: "Dwyane", message: "I am a lady." },
  {name: "Marvin", message: "In ya eye!" }
]);

  return (
    <div className="app">
    {users.map(user =>(
      <Tweet name={user.name} message={user.message}/>
    ))}
    </div>
  );
}

export default App;
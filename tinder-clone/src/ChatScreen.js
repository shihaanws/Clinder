import { Avatar } from '@material-ui/core';
import React,{useState} from 'react';
import "./ChatScreen.css";


function ChatScreen() {
    const [input,setInput] = useState('');
    const [messages,setMessages] = useState([
        {
            name:"John",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSU_NJ8BRFquFy0PDOztdoHq8cfE49lFQIe5A&usqp=CAU",
            message:"Hey there! ",
        },

        {
            name:"Kumar",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSU_NJ8BRFquFy0PDOztdoHq8cfE49lFQIe5A&usqp=CAU",
            message:"Looking for a potential collaborator ?",
        },
        {
            
            message:"Of course yeah.",
        }, 
    ]);

    const handleSend=e=>{
        e.preventDefault();

        setMessages([...messages,{message:input}]);
        setInput("");
    }
    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">Approved with Annie on 10/08/2000</p>
            {messages.map((message) => 
            message.name ? (
                <div className="chatScreen__message">
                    <Avatar 
                    className="chat__image" 
                    alt={message.name}
                    src={message.image}
                    />
                    <p className="chatScreen__text">
                        {message.message}
                    </p>
                </div>
            ):(
                <div className="chatScreen__message">
                
                <p className="chatScreen__textUser">
                    {message.message}
                </p>
            </div>
            ))}

            <div>
               <form className="chatScreen__input">
               <input  value={input}
               onChange={(e)=> setInput(e.target.value)}
               className="chatScreen__inputField"
               placeholder="Type a message..." type="text"></input>
               <button onClick={handleSend} type= "submit" className="chatScreen__inputButton">SEND</button> 
               </form>
            </div>

        </div>
    )
}

export default ChatScreen;

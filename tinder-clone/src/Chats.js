import React from 'react'
import './Chats.css';
import ChatRow from "./ChatRow";

function Chats() {
    return (
       
        <div className="chats">
            <ChatRow 
            name="Annie"
            message="Hey there! Looking for a job? "
            timestamp="40 seconds ago"
            profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSU_NJ8BRFquFy0PDOztdoHq8cfE49lFQIe5A&usqp=CAU"
            />
             <ChatRow 
            name="John"
            message="Please do check your mail."
            timestamp="2 hours ago"
            profilePic ="https://www.pinclipart.com/picdir/middle/95-958614_man-icon-person-logo-png-clipart.png"           />
             <ChatRow 
            name="Roma"
            message="Sure. Its a pleasure to have you."
            timestamp="Yesterday 10 am"
            profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0WxAubQyY-WaN8W-esXaxi_SfTKpjHYIf9w&usqp=CAU"
            />
             <ChatRow 
            name="Kumar"
            message="Approved. Check mail."
            timestamp="August 16th"
            profilePic="..."
            />
             <ChatRow 
            name="Naveen"
            message="Please respond !"
            timestamp="8 hours ago"
            profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNBItNFSMg53QgRwa2YfJAJeqnM4VMWsOWjg&usqp=CAU"
            />
        </div>
        
    )
}

export default Chats;

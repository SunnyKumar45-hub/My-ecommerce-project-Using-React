import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/supersimpledevimage.jpg';
import './ChatMessage.css'; 

export function ChatMessage({message, sender, time}){
    console.log('Robot Image URL:', RobotProfileImage);
    console.log('User Image URL:', UserProfileImage);
            //const message = props.message;
            //const sender = props.sender;
            //const {message, sender} = props;
            /*
            if(sender === "robot"){
              return (
                <div>
                  <img src="robot.png" width="30" />
                  {message}
                </div>
              );
            }
            */
              return (
                <div className={
                  sender === 'user'
                    ? 'chat-message-user'
                    : 'chat-message-robot'
                }>
                  {sender === 'robot' && (
                     <img
                       className="chat-message-profile"
                     src={RobotProfileImage} />
                  )}
                  <div 
                  className="chat-message-text">
                    {message}
                  <span className="timestamp">{time}</span>  
                  </div>
                  {sender === 'user' && (
                     <img 
                       className="chat-message-profile"
                     src={UserProfileImage} />
                  )}
                </div>
              )
          }


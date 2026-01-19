import { useState, useRef, useEffect } from "react";
import { Chatbot } from "supersimpledev";
import './ChatInput.css';
import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/user.png';

import dayjs from 'dayjs';

export function ChatInput( {chatMessages, setChatMessages, setIsLoading} ) {
            const [inputText, setInputText] = useState('');
            const time = dayjs().valueOf();
            function saveInputText(event) {
                setInputText(event.target.value);
            }

            function Clear() {
              localStorage.setItem('messages', JSON.stringify([]));
              setChatMessages([]);
              // update UI to show no messages
            }
            function sendMessage() {
              if(!inputText.trim()) return;

              const newChatMessages = [
                 ...chatMessages,
                 {
                  message: inputText,
                  sender: 'user',
                  time: dayjs(time).format('h:mma'),
                  id: crypto.randomUUID()
                 }
                ];

               setChatMessages(newChatMessages);
               setInputText('');
               setIsLoading(true);

               setTimeout(() => {
               const response = Chatbot.getResponse(inputText);
                setChatMessages([
                 ...newChatMessages,
                 {
                  message: response,
                  sender: 'robot',
                  time: dayjs(time).format('h:mma'),
                  id: crypto.randomUUID()
                 }
               ]);

               setIsLoading(false);
                }, 1000);
            }

            return (
              <div className="chat-input-container">
                <input 
                  placeholder="Send a message to chatbot" 
                  size="30" 
                  onChange={saveInputText}
                  value={inputText}
                  className="chat-input"
                />
                <button 
                  onClick = {sendMessage}
                  className = "send-button"
                >Send</button>
                <button
                  onClick = {Clear}
                  className = "Clear-button"
                >Clear</button>
              </div>
            );
          }

          function ChatMessage({message, sender}){
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
                  </div>
                  {sender === 'user' && (
                     <img 
                       className="chat-message-profile"
                     src={UserProfileImage} />
                  )}
                </div>
              )
          }

          function useAutoScroll(chatMessages) {
              const ref = useRef(null);

              useEffect(() => {
                const containerElem = ref.current;
              if(containerElem) {
                containerElem.scrollTop = containerElem.
                scrollHeight;
              }
              }, [chatMessages]);

              return ref;
          }
          function ChatMessages({ chatMessages }) {

              const chatMessagesRef = useAutoScroll([chatMessages]);
            return (
              <div 
                className="chat-messages-container"
                ref={chatMessagesRef}
              >
                {chatMessages.map((chatMessage) => {
                  return (
                    <ChatMessage 
                      message={chatMessage.message}
                      sender={chatMessage.sender}
                      time={chatMessage.time}
                      key={chatMessage.id}
                    />
                  );
                })}
              </div>
            );
          }

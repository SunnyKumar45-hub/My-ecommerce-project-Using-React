import { useState, useEffect } from 'react' 
import { ChatInput } from './components/ChatInput';
import { Chatbot } from "supersimpledev";
import ChatMessages from "./components/ChatMessages";
import {ChatMessage} from "./components/ChatMessage";
import './App.css';
          
          function App() {
            const [isLoading, setIsLoading] = useState(false);
            const [chatMessages, setChatMessages] = useState(() => {
            return [{
              message: 'hello chatbot',
              sender: 'user',
              id: 'id1'
            }, {
              message: 'Hello! How can I help you?',
              sender: 'robot',
              id: 'id2'
            }, {
              message: 'can you get me todays date?',
              sender: 'user',
              id: 'id3'
            }, {
              message: 'Today is 23 december',
              sender: 'robot',
              id: 'id4'
            }]});

            useState(() => {
              JSON.parse(localStorage.getItem('messages'))
            })
            useEffect(() => {
              localStorage.setItem('messages', JSON.stringify(chatMessages));
            }, [chatMessages]);

            useEffect(() => {
               Chatbot.addResponses({
                      "hello": "Hi there! How can I help you today?",
                      "how are you": "I'm doing great, thanks for asking!",
                      "what's your name": "I'm a friendly chatbot here to assist you.",
                      "bye": "Goodbye! Have a great day!",
               }, []);
            })

            //const chatMessages = array[0];//tells about current data
            //const setChatMessages = array[1];//it updates the current data
            //const [chatMessages, setChatMessages] = array[];


            // JSX => JS + XML
            return(
              <div className="app-container">

              {isLoading && (
                <ChatMessage
                  message = {<img className="loading-img" src="loading-spinner.gif" width="24"/>}
                  sender="robot"
                />
              )}
              {chatMessages.length === 0 
                 ? <p>Welcome to the chatbot project! Send a message below.</p>
                 : null
              }
                <ChatMessages 
                  chatMessages={chatMessages}  //naming convention using same name
                  setChatMessages={setChatMessages}
                  setIsLoading={setIsLoading}
                />
                <ChatInput 
                  chatMessages={chatMessages}
                  setChatMessages={setChatMessages}
                  setIsLoading={setIsLoading}
                />
              </div>
            );
          }


export default App

import React, {useEffect, useRef, useState} from "react";
import axios from "axios";

const WebSock = () => {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");
  const socket = useRef();
  const [connected, setConnected] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    socket.current = new WebSocket('ws://localhost:5000');

    socket.current.onoopen = () => {
      setConnected(true);

    };
    socket.current.onomessage = () => {

    };
    socket.current.onoclose = () => {
      console.log('Socket is closed');

    };
    socket.current.onoerror = () => {
      console.log('Woops. There is an error');

    };


  }, []);



  const sendMessage = async () => {
    await axios.post("http://localhost:5000/new-messages", {
      message: value,
      id: Date.now(),
    });
  };
  if (!connected) {
    return (
      <div className="center">
        <input type='text' placeholder="Enter your name"/>
        <button onClick={sendMessage}>Enter</button>
      </div>
    );
  }


  return (
    <div className="center">
      <div>
        <div className="form">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
          />
          <button onClick={sendMessage}>Send</button>
        </div>
        <div className="messages">
          {messages.map((mess) => (
            <div className="message" key={mess.id}>
              {mess.message}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventSourcing;
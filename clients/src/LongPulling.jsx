import React, {useState} from "react";
import axios from "axios";
const LongPulling = () => {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState('');
  const sendMessages = async () => {
    await axios.post('http://localhost:5000', {
      messages : value,
      id : Date.now(),
    })

  };
  return (
    <div className="center">
      <div className="form">
        <input value={value} onChange={e => setValue(e.target.value)} type="text"/>
        <button onClick={setMessages}>Send</button>
      </div>
      <div className="messages">
        {messages.map((mess) =>
          <div className="message" key={mess.id}>
            {mess.message}
          </div>
        )};

      </div>

    </div>

  );


}
export default LongPulling;
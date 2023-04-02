import React, {useState} from "react";
const LongPulling = () => {
  const [messages, setMessages] = useState([]);
  return (
    <div className="center">
      <div className="form">
        <input type="text"/>
        <button>Send</button>
      </div>
      <div className="messages">
        {messages.map((mess) => {
          <div className="message" key={mess.id}>
            {mess.message}


          </div>
        })};

      </div>

    </div>

  );


}
export default LongPulling;
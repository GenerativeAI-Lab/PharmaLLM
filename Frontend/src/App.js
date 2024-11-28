import "./App.css";
import BottomBar from "./components/bottomBar";
import Message from "./components/message";
import React from "react";
import { useState, useRef, useEffect } from "react";
import axios from "axios";

let list = [
  ["what is 1+1", "1+1 is 2."],
  ["who are you", "i am med llm"],
]

function App() {
  const [message, setMessage] = useState("");
  const [MessageList, setMessageList] = useState(list);
  const chatBodyRef = useRef(null);

  const enter = () => {
    if(MessageList[MessageList.length-1][1]==="Loading..."){
      window.alert("Please Wait rn!")
    }
    else{
      setMessage("");
      setMessageList([...MessageList, [message,"Loading..."]]);

      axios.post('http://127.0.0.1:5000/generate_response', {"user_input": message}, { timeout : 10000})
        .then(response => {
          window.alert(response.data)
        })
        .catch(error => {
          window.alert(error)
        });
    }
  };

  const change = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
  }, [MessageList]);

  return (
    <div className="App">
      <div className="tyn-root">
        <div className="tyn-content-full-height has-aside-base">
          <div
            className="tyn-main tyn-main-boxed tyn-main-boxed-lg"
            id="tynMain"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
            }}
          >
            <div
              className="tyn-chat-body m-4 rounded-3 js-scroll-to-end"
              id="tynBotBody"
              ref={chatBodyRef}
              style={{ paddingBottom: "100px", overflowY: "auto" }} // Ensure overflow is set to auto for scrolling
            >
              <div className="tyn-qa" id="tynBotReply">
                {MessageList.map((item, index) => (
                  <React.Fragment key={index}>
                    <Message type="user" message={item[0]} />
                    <Message type="bot" message={item[1]} />
                  </React.Fragment>
                ))}
              </div>
              {/* .tyn-qa */}
            </div>

            {/* Message Input */}
            <BottomBar change={change} enter={enter} message={message} />
            {/* Message Input */}
          </div>
          {/* .tyn-chat-content */}
        </div>
      </div>
    </div>
  );
}

export default App;





export default function BottomBar(props){
    return(
        <div className="cetralizer">
        <div className=" ps-3 pe-4 py-3 bg-white mb-4 mx-4 rounded-3 bottom-bar">
          <div className="tyn-chat-form-enter">
            <input
              style={{border: "none"}}
              type="text"
              className="tyn-chat-form-input"
              id="tynBotInput"
              contentEditable=""
              onChange={props.change}
              value={props.message}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  document.getElementById("tynBotSend").click();
                }
              }}
            />
            <ul className="tyn-list-inline me-n2 my-1">
              <li>
                <button
                  id="tynBotSend"
                  className="btn btn-icon btn-white btn-md btn-pill"
                  onClick= {props.enter}   
                                       
                >
                  {/* send-fill */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-send-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}
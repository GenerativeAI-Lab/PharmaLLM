import "../App.css"
import "../index.css"
// import image
import bot from "../bot.png"
import user from "../user.jpg"


export default function Message(props) {
  return (
    <div>
    {
      props.type === 'user' ? 

          <div className="tyn-qa-item" style={{backgroundColor: "white", marginTop: "6px", borderTopLeftRadius: "6px", borderTopRightRadius: "6px"}}>
            <div className="tyn-qa-avatar">
              <div className="tyn-media tyn-size-md">
                <img alt ="" src= {bot}/>
              </div>
            </div>
            <div className="tyn-qa-message tyn-text-block">
              <p>{props.message}</p>
            </div>
          </div>

      :   <div className="tyn-qa-item" style={{marginBottom:"12px", borderBottomLeftRadius: "6px", borderBottomRightRadius:""}}>
            <div className="tyn-qa-avatar">
              <div className="tyn-qa-avatar-wrap">
                <div className="tyn-media tyn-size-md">
                  <img src={user} alt="" />
                </div>
              </div>
            </div>
            <div className="tyn-qa-message tyn-text-block">
              <p>
                <p>{props.message}</p>
              </p>
            </div>
            {/* .tyn-qa-message */}
          </div>
    }
    </div>
  );
}
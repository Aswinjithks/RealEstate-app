import React, { useState } from "react";
import "./chat.scss";

const Chat = () => {
  const [chat, setChat] = useState(true);

  return (
    <div className="chat">
      <div className="messeges">
        <h1>Messeges</h1>
        <div className="messege">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Name</span>
          <p>How much coast for this...</p>
        </div>
        <div className="messege">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Name</span>
          <p>How much coast for this...</p>
        </div>
        <div className="messege">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Name</span>
          <p>How much coast for this...</p>
        </div>
        <div className="messege">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Name</span>
          <p>How much coast for this...</p>
        </div>
        <div className="messege">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Name</span>
          <p>How much coast for this...</p>
        </div>
      </div>

      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              Jhon
            </div>
            <span className="close" onClick={() => setChat(null)}>
              X
            </span>
          </div>
          <div className="center">
            <div className="chatMessege">
              <p>s simply dummy text of the printing</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessege own">
              <p>s simply dummy text of the printingg</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessege">
              <p>s simply dummy text of the printing</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessege own">
              <p>s simply dummy text of the printing</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessege own">
              <p>s simply dummy text of the printing</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessege">
              <p>s simply dummy text of the printing</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessege own">
              <p>s simply dummy text of the printing</p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea name="" id=""></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;

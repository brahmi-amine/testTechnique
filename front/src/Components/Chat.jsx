import React, { useState, useEffect, useContext } from "react";
import io from "socket.io-client";
import { GlobalContext } from "../Context/Global";
import { getMyOwnMessage, sendMessage } from "../Services/MessageApi";
import { useUser } from "../Auth/useUser";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { formatDate } from "../Utils/DateUtils";

const socket = io(process.env.REACT_APP_BASE_URL);

function Chat() {
  const navigate = useNavigate();
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [toEmail, setToEmail] = useState("");
  const { messages, setMessages, setToken } = useContext(GlobalContext);
  const user = useUser();
  const userEmail = user?.user?.email;

  useEffect(() => {
    getMyOwnMessage(user?.user?.email).then((response) => {
      setMessages(response?.data);
    });
  }, []);

  useEffect(() => {
    const socket = io(process.env.REACT_APP_BASE_URL);

    if (userEmail) {
      socket.emit("registerEmail", userEmail);
    }

    socket.on("receiveMessage", (msg) => {
      setMessages((prevMessages) => [msg, ...prevMessages]);
    });

    return () => {
      socket.off("receiveMessage");
      socket.close();
    };
  }, [userEmail]); // Depend on userEmail to ensure cleanup and re-initialization if userEmail changes

  const handleSendMessage = () => {
    if (subject.trim() && content.trim() && toEmail && userEmail) {
      const message = { subject, content, from: userEmail, to: toEmail, createdAt: moment().format("YYYY-MM-DD HH:mm:ss") };
      socket.emit("sendMessage", message);
      //setMessages((prevMessages) => [...prevMessages, message]); // Optionally display the message in the sender's UI
      // Reset input fields
      sendMessage(subject, content, toEmail, userEmail).then((res) => {
        setSubject("");
        setContent("");
      });
    }
  };

  const logout = () => {
    setToken("");
    setMessages([]);
    navigate("/login");
  };

  return (
    <div>
      <input type="email" placeholder="Recipient's Email" value={toEmail} onChange={(e) => setToEmail(e.target.value)} />
      <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
      <textarea placeholder="Message" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
      <button onClick={handleSendMessage}>Send</button>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>
            <p>
              <strong>Subject:</strong> {msg.subject}
            </p>
            <p>{msg.content}</p>
            <p>{formatDate(msg.createdAt)}</p>
            <p>
              <strong>From:</strong> {msg.from} <strong>To:</strong> {msg.to}
            </p>
            <p>---------------------------</p>
          </div>
        ))}
      </div>
      <button onClick={logout} className="login-button">
        Logout
      </button>
    </div>
  );
}

export default Chat;

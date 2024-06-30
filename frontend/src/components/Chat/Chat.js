import React, { useState, useEffect, useRef } from 'react';
import './Chat.css'; 
import { fetchMessages, sendMessage } from '../../api/api.service';

function Chat() {
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState([]);
  const [isSending, setIsSending] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const getMessages = async () => {
      const data = await fetchMessages();
      setConversation(data);
    };

    getMessages();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [conversation]);

  const handleMessageSend = async () => {
    if (message.trim() === '') return;
    setIsSending(true);
    const { continuationResponse, correctionAndExplanation } = await sendMessage(message);
    setConversation([
      ...conversation,
      { userMessage: message, gptMessage: continuationResponse, correctionAndExplanation }
    ]);
    setMessage('');
    setIsSending(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleMessageSend();
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="chat">
      <div className="messages-container">
        <div className="messages">
          {conversation.map((msg, index) => (
            <div key={index}>
              <div className="message user">
                <p className="message-text">{msg.userMessage}</p>
              </div>
              <div className="message gpt">
                <p className="message-text">{msg.gptMessage}</p>
              </div>
              {msg.correctionAndExplanation && (
                <div className="message correction">
                  <p className="message-text">{msg.correctionAndExplanation}</p>
                </div>
              )}
            </div>
          ))}
          {isSending && (
            <div className="message gpt">
              <p className="message-text typing">...</p>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="input-container">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleMessageSend}>Enviar</button>
      </div>
    </div>
  );
}

export default Chat;

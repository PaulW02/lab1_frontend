import React, { useState, useEffect } from 'react';
import '../css/MessageList.css';
import { MessageService } from '../rest/MessageService';
import {useNavigate} from "react-router-dom"; // Import your custom CSS file

type MessageDTO = {
    id: number;
    sender: any;
    receiver: any;
    info: string;
    date: string;
};

function MessageList() {
    const [messages, setMessages] = useState<Map<number, MessageDTO[]>>(new Map());
    const userId = localStorage.getItem('userId');
    const role = localStorage.getItem('role');
    const navigate = useNavigate();

    useEffect(() => {
        if (role == null){
            navigate("/Home")
        }else {
            MessageService.getMessagesByUser(userId).then((response) => {
                if (response.ok) {
                    // @ts-ignore
                    setMessages(new Map(Object.entries(response.response)));
                } else {
                    console.error('Failed to fetch messages:', response.status);
                }
            });
        }
    }, []);

    return (
        <div className="message-list-container">
            <h2>Conversations</h2>
            {Array.from(messages).map(([otherUserId, messages]) => {
                const firstMessage = messages[0];
                const isCurrentUserSender = firstMessage.sender === parseInt(userId || '');

                return (
                    <div key={otherUserId} className="conversation">
                        <h3>{`Conversation with ${isCurrentUserSender ? firstMessage.otherUserName : firstMessage.otherUserName}`}</h3>
                        <div className="message-list">
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`message ${message.sender === parseInt(userId || '') ? 'sent' : 'received'}`}
                                >
                                    <div className="message-bubble">
                                        <p>{message.info}</p>
                                        <span className="timestamp">{message.date}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default MessageList;

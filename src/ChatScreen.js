import React, { useState } from 'react';
import Avatar from "@material-ui/core/Avatar";
import "./ChatScreen.css";

function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Sarah',
            image: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2022_28/3562183/melissa-chan-byline-2022.jpg',
            message: "Yo What's up, I love you!"
        },
        {
            name: 'Sarah',
            image: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2022_28/3562183/melissa-chan-byline-2022.jpg',
            message: "Answer Me!!!"
        },
        {
            message: "Sorry I was busy",
        },
    ]);

    const handleSend = e => {
        e.preventDefault();

        setMessages([...messages, { message: input }]);
        setInput("");
    }

    return (
        <div className="chatScreen">
        <p className='chatScreen__timeStamp'>YOU MATCHED WITH SARAH ON 10/08/23</p>

        {messages.map(message => (
            message.name ? (
                <div className='chatScreen__message'>
                    <Avatar
                        className='chatScreen__image'
                        alt={message.name}
                        src={message.image}
                    />
                    <p className='chatScreen__text'>{message.message}</p>
                </div>
            ) : (
                <div className='chatScreen__message'>
                    <p className='chatScreen__textUser'>{message.message}</p>
                </div>
            )

        ))}
        <form className="chatScreen__input">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="chatScreen__inputField"
                    placeholder="Type a message..."
                    type="text"
                />
                <button onClick={handleSend} type="submit" className='chatScreen__inputButton'>SEND</button>
        </form>

        </div>
    )
}

export default ChatScreen;
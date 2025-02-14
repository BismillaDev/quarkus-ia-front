import React, { useState } from "react";
import "./Chatbot.css";

const ChatBot = () => {
	const [message, setMessage] = useState("");
	const [chat, setChat] = useState([
		{ role: "assistant", content: "Hi! How can I assist you today?" },
	]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!message.trim()) return;
		setChat([...chat, { role: "user", content: message }]);
		setMessage("");
	};

	return (
		<div className="chat-container">
			<div className="chat-box">
				{chat.map((item, i) => (
					<div
						key={i}
						className={`message ${item.role === "user" ? "user" : "assistant"}`}
					>
						{item.content}
					</div>
				))}
			</div>
			<form onSubmit={handleSubmit} className="chat-input-container">
				<input
					type="text"
					className="chat-input"
					placeholder="Type a message..."
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button type="submit" className="send-button">
					Send
				</button>
			</form>
		</div>
	);
};

export default ChatBot;

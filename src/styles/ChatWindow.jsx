import React, { useState, useRef, useEffect } from "react";
import EmojiPicker from "emoji-picker-react";
import userpic from '/img/userpic.png'
import googletrans from '/img/googletrans.png'
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown'; 

import classNames from 'classnames';


const ChatWindow = () => {


const [isActive, setIsActive] = useState(false);

     const handleToggle = () => {
       setIsActive(!isActive);
     };
const [isActiveout, setIsActiveout] = useState(false);
     const handleTogglenot = () => {
       setIsActiveout(!isActiveout);
     };

  















    const [messages, setMessages] = useState([
        { from: "bot", text: "Hi there! 👋 How can I help you?" },
    ]);
    const [input, setInput] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [isMax, setIsMax] = useState(false);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const [online, setOnline] = useState(true);

    const messagesEndRef = useRef(null);
    const recognitionRef = useRef(null);

    const pickerRef = useRef(null);

  const handleClickOutside = (event) => {
    if (pickerRef.current && !pickerRef.current.contains(event.target)) {
      setShowPicker(false);
    }
  };

    // Initialize Web Speech API
    useEffect(() => {
        if ("webkitSpeechRecognition" in window) {
            recognitionRef.current = new window.webkitSpeechRecognition();
            recognitionRef.current.continuous = false;
            recognitionRef.current.interimResults = false;
            recognitionRef.current.lang = "en-US";

            recognitionRef.current.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                setInput((prev) => prev + " " + transcript);
                setIsListening(false);
            };

            recognitionRef.current.onerror = () => setIsListening(false);
            recognitionRef.current.onend = () => setIsListening(false);
        }

         document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

    }, []);

    const toggleListening = () => {
        if (isListening) {
            recognitionRef.current.stop();
        } else {
            recognitionRef.current.start();
        }
        setIsListening((prev) => !prev);
    };

    const handleSend = () => {
        if (!input.trim()) return;
        setMessages((prev) => [...prev, { from: "user", text: input }]);
        setInput("");
        setShowEmojiPicker(false);
        setTimeout(() => {
            setMessages((prev) => [...prev, { from: "bot", text: `You said: "${input}"` }]);
        }, 800);
    };

    const handleEmojiClick = (emojiData) => {
        setInput((prev) => prev + emojiData.emoji);
        setShowEmojiPicker(false); // 👈 Hide picker after selection
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // Simulate online/offline toggle every 15s
    useEffect(() => {
        const interval = setInterval(() => setOnline((prev) => !prev), 15000);
        return () => clearInterval(interval);
    }, []);

    if (!isOpen) {
        return (
            <button style={styles.openButton} onClick={() => setIsOpen(true)}>
                <div className="chatbotcircle">

                    <img src="https://i.pravatar.cc/30?img=5" className="chatavtarimg" alt="Avtar" />
                </div>
            </button>
        );
    }

    return (



<>



 



 
        <div style={styles.chatBox(isMinimized)} className={[isActive ? 'active-class' : 'inactive-class', isActiveout ? 'inactive-class' : ''].join(' ')}>
            <div style={styles.header} className="chatheader">
                <div className="chatheadertop">
                    <div className="avtarsec"> <img src="https://i.pravatar.cc/30?img=5" className="chatavtarimg" alt="Avtar" /> <span>Chat with SKY<span>Bot</span></span> </div>
                    <div className="rightchatbtn">
                        <button style={styles.controlButton} onClick={() => { handleToggle(); setIsMinimized(false);}}   >
                            <i class="bi bi-arrows-angle-expand"></i>
                        </button>
                        <button style={styles.controlButton} onClick={() => {handleTogglenot(); setIsMinimized(!isMinimized)}}>
                            <i class="bi bi-dash"></i>
                        </button>
                        <button style={styles.controlButton} onClick={() => setIsOpen(false)}>
                            <i class="bi bi-x-lg "></i>
                        </button>
                    </div>

                </div>

                <div className="chatbotsetting">
                    <div style={{ display: "flex", alignItems: "center", gap: 5 }} className="weareonline">
                        <strong>We are {online ? "Online" : "Offline"}</strong>
                        <span style={styles.statusDot(online)} title={online ? "Online" : "Offline"}> </span>
                    </div>
                    <div className="droptrans">


                        <Dropdown class="dropdown dashboardright">
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                <i class="bi bi-three-dots-vertical"></i>
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="dropdown-contents">
                                <span className="search"><input type="search" name="search"></input> <i class="bi bi-search"></i></span>
                                <Dropdown.Item href="#"><span><i class="bi bi-gear-fill"></i></span> Preferences</Dropdown.Item>
                                <Dropdown.Item href="#"><span><i class="bi bi-person-raised-hand"></i></span> Help </Dropdown.Item>
                                <Dropdown.Item href="#"><span><i class="bi bi-envelope"></i></span> Contact Us </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>


                        <div className="googletranslate"><Link to="#"  ><img src={googletrans} /> </Link></div>
                    </div>

                </div>




            </div>

            {!isMinimized && (
                <>
                    <div style={styles.messages}>
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                style={{
                                    ...styles.messageRow,
                                    flexDirection: msg.from === "user" ? "row-reverse" : "row",
                                }}
                            >
                                <img
                                    src={`https://i.pravatar.cc/30?img=${msg.from === "user" ? 3 : 5}`}
                                    alt="avatar"
                                    style={styles.avatar}
                                />
                                <div
                                    style={{
                                        ...styles.bubble,
                                        backgroundColor: msg.from === "user" ? "#d1e7dd" : "#e7f1ff",
                                    }}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    <div style={styles.inputArea}>

                        <input
                            style={styles.input}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSend()}
                            placeholder="Type a message..."
                        />

                        <button className="sendmsg" style={styles.sendButton} onClick={handleSend}>
                            <i class="bi bi-play-fill"></i>
                        </button>
                    </div>
                    <div className="chatfooter">
                        <button style={styles.emojiButton} onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
                            😊
                        </button>
                        <button className="micvoice" style={styles.micButton} onClick={toggleListening}>
                            <i class="bi bi-mic-fill"></i>
                        </button>
                        <p className="powerby"> Powered by SKY DigitTech</p>

                    </div>

                    {showEmojiPicker && (
                        <div style={styles.emojiPicker}>
                            <EmojiPicker onEmojiClick={handleEmojiClick} height={300} width={300} />
                        </div>
                    )}
                </>
            )}
        </div>
        </>
    );
};

const styles = {
    openButton: {
        position: "fixed",
        bottom: 20,
        right: 20,

        color: "#333",
        border: "none",
        padding: "0px",
        borderRadius: "24px",
        cursor: "pointer",
        fontSize: "35px",
        zIndex: 999,
    },
    chatBox: (isMinimized) => ({
        position: "fixed",
        bottom: 20,
        right: 20,
        width: 340,
        height: isMinimized ? 55 : 500,
        backgroundColor: "rgb(248 249 250)",
        border: "1px solid #ccc",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        transition: "height 0.3s ease",
        overflow: "hidden",
        zIndex: 1000,
    }),
    header: {
        backgroundColor: "#8faadc",
        color: "#000",
        padding: "10px 14px",
        display: "flex",

        height: "120px",
        borderRadius: "0 0 45% 45%",


    },
    statusDot: (online) => ({
        width: 10,
        height: 10,
        borderRadius: "50%",
        backgroundColor: online ? "#4caf50" : "#f44336",
    }),
    controlButton: {
        background: "transparent",
        color: "#fff",
        border: "none",
        fontSize: 16,
        marginLeft: 8,
        cursor: "pointer",
    },
    messages: {
        flex: 1,
        padding: "10px",
        overflowY: "auto",
        backgroundColor: "#f8f9fa",
    },
    messageRow: {
        display: "flex",
        alignItems: "flex-start",
        marginBottom: 10,
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: "50%",
        margin: "0 8px",
    },
    bubble: {
        maxWidth: "70%",
        padding: "10px",
        borderRadius: "12px",
        fontSize: 14,
        backgroundColor: "#eee",
    },
    inputArea: {
        padding: "8px",
        display: "flex",
        alignItems: "center",
        borderTop: "1px solid #ccc",
        gap: 6,
    },
    input: {
        flex: 1,
        padding: "10px",
        borderRadius: "6px",
        border: "1px solid #ccc",
        outline: "none",
    },
    emojiButton: {
        background: "transparent",
        fontSize: 20,
        border: "none",
        cursor: "pointer",
    },
    micButton: {
        background: "transparent",
        fontSize: 18,
        border: "none",
        cursor: "pointer",
    },
    sendButton: {
        backgroundColor: "#0d6efd",
        color: "#fff",
        border: "none",
        padding: "8px 12px",
        borderRadius: "6px",
        cursor: "pointer",
    },
    emojiPicker: {
        position: "absolute",
        bottom: 60,
        right: 20,
        zIndex: 2000,
    },
};

export default ChatWindow;

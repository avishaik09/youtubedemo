import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.message);
  useEffect(() => {
    const i = setInterval(() => {
      console.log("api polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + "👻",
        })
      );
    }, 1500);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="ml-5 p-2 w-full h-[600px] border border-black bg-slate-200 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((c) => (
            <ChatMessage name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className="ml-5 p-2 w-full border border-black rounded-lg  "
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "myself",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-80"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-1 bg-green-400">Send</button>
      </form>
    </>
  );
};

export default LiveChat;

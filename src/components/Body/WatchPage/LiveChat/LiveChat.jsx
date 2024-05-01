import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../../../../utils/store/chatSlice";
import { generateName, generateText } from "../../../../utils/helper";

function LiveChat() {
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.chatMessage);
  const [addMessage, setAddMessage] = useState("");
  useEffect(() => {
    const chat = setInterval(() => {
      dispatch(
        addChat({
          name: generateName(),
          text: generateText(20),
        })
      );
      return ()=> clearInterval(chat)
    }, 2000);
  }, []);
  return (
    <div className="border-2 w-[24rem]  rounded-lg bg-slate-100">
      <p className="border-b-2 border-black px-4 font-bold">Top chat</p>
      <div className="flex flex-col-reverse overflow-y-scroll h-[20rem] mt-2">
        <div>
          {chatMessage.map((m, i) => (
            <ChatMessage key={i} name={m.name} text={m.text} />
          ))}
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addChat({
              name: "user",
              text: addMessage,
            })
          );
          setAddMessage("");
        }}
        className="flex gap-2 px-4 py-2"
      >
        <input
          type="text"
          value={addMessage}
          onChange={(e) => setAddMessage(e.target.value)}
          className="border-2 px-2 border-black rounded-md"
        />
        <button>send</button>
      </form>
    </div>
  );
}

export default LiveChat;

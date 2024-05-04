function ChatMessage({ name,text }) {
  return (
    <div className="flex items-center pl-2 shadow-sm my-1">
      <img
        className="h-5"
        src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
        alt="user"
      />{" "}
      <span className="mx-2 font-bold">{name}</span>
      <span>{text}</span>
    </div>
  );
}

export default ChatMessage;

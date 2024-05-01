
function Comment({data}) {
  const {name,text}= data
  return (
    <div className="flex gap-2 bg-slate-100 rounded-lg shadow-md">
      <img className="w-10 h-10" src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
          alt="user" />
      <div>
      <p className="font-bold text-md">{name}</p>
      <p>{text}</p>
      </div>
    </div>
  )
}

export default Comment
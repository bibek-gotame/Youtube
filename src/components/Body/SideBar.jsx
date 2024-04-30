import { useSelector } from "react-redux"

function SideBar() {
  const menuOpen = useSelector(store => store.app.isMenuOpen)
  return (
    <div className={ menuOpen? "w-[10rem] pl-4 pt-2 ": 'hidden'}>
      <div>
        <p>Home</p>
        <p>Shorts</p>
        <p>Video</p>
        <p>Live</p>
      </div>
      <div>
        <h1 className="font-bold text-lg">Subscription</h1>
        <p>Music</p>
        <p>Gaming</p>
        <p>Sports</p>
        <p>Movies</p>
      </div>
      <div>
        <h1 className="font-bold text-lg">Watch Later</h1>
        <p>Music</p>
        <p>Gaming</p>
        <p>Sports</p>
        <p>Movies</p>
      </div>
    </div>
  )
}

export default SideBar
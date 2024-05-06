import { useDispatch } from "react-redux"
import { addSearchQuery } from "../../../utils/store/searchSlice"

function Button({data}) {
  const dispatch =useDispatch()
  return (
    <div
    onClick={()=>{
      dispatch(addSearchQuery(data))
    }}
     className="px-4 py-1 bg-black text-white font-semibold rounded-md">
        {data}
    </div>
  )
}

export default Button
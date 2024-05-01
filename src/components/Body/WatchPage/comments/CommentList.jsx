import Comment from "./Comment"

function CommentList({data}) {
  return data.map((c,i)=>(
    <div key={i}>
        <Comment data={c}/>
        <div className="ml-6 py-2">
            <CommentList data={c.reply}/>
        </div>
    </div>
  ))
}

export default CommentList
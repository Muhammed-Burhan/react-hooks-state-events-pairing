import React from "react";
import Comment from "./Comment";
function CommentList({ comments, showState, showEventHandler }) {
  //var
  const len = comments.length;
  //we make a copy of comments and then we sort it and use it to display comments
  const copy = comments.slice().sort((a, b) => a - b);
  //function
  const showHandler = () => {
    showEventHandler((prev) => !prev);
  };
  //state

  return (
    <div>
      <br />
      <button onClick={showHandler}>
        {showState ? "Hide Comments" : "Show Comments"}
      </button>
      <br />
      <br />
      <hr />
      <h3>{len} Comments</h3>
      {showState
        ? copy.map((comment, index) => (
            <div>
              <Comment
                key={comment.id}
                user={comment.user}
                comment={comment.comment}
              />
            </div>
          ))
        : null}
    </div>
  );
}

export default CommentList;

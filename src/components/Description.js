import React from "react";

function Description({
  title,
  views,
  date,
  upvotes,
  downvotes,
  onUpVoteClick,
  onDownVoteClick,
}) {
  const upVotHandler = (e) => {
    onUpVoteClick((prevVote) => prevVote + 1);
  };
  const downVotHandler = (e) => {
    onDownVoteClick((prevVote) => prevVote + 1);
  };
  return (
    <div>
      <h1>{title}</h1>
      <p>
        {views} Views | Uploaded {date}
      </p>
      <button onClick={upVotHandler}>{upvotes}👍</button>
      <button onClick={downVotHandler}>{downvotes}👎</button>
    </div>
  );
}

export default Description;

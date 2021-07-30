import React, { useState } from "react";

//Imports
import Description from "./Description";

import CommentList from "./CommentList";

function Video({ data }) {
  //states
  const [upvotes, setUpVotes] = useState(data.upvotes);
  const [downvotes, setDownVotes] = useState(data.downvotes);
  const [hide, setHide] = useState(true);

  return (
    <div>
      <iframe
        width="820"
        height="410"
        src={data.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={data.title}
      />
      <Description
        title={data.title}
        views={data.views}
        date={data.createdAt}
        upvotes={upvotes}
        onUpVoteClick={setUpVotes}
        downvotes={downvotes}
        onDownVoteClick={setDownVotes}
      />
      <CommentList
        comments={data.comments}
        showState={hide}
        showEventHandler={setHide}
      />
    </div>
  );
}

export default Video;

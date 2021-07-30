import video from "../data/video.js";
import React from "react";

//Imported Components
import Video from "./Video.js";
function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video data={video} />
    </div>
  );
}

export default App;

import React, { useEffect } from "react";

export default function Result(props) {
  var percentage = (props.Result / 5) * 100 + "%";
  console.log(percentage);
  const reload = () => {
    document.location.reload();
  }
  return (
    <div className="ResultBox">
      <h2>Final Results</h2>
      <h3>
        {props.Result} correct out of 5 - ({percentage})
      </h3>
      <button onClick={reload}>Restart game</button>
    </div>
  );
}

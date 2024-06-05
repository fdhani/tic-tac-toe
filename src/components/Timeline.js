import React from "react";
import Button from "./Button";

const Timeline = ({ timeline, onTimelineItemClick }) => {
  return (
    <>
      <h2>History</h2>
      {timeline.map((_, index) => (
        <Button key={index} onClick={() => onTimelineItemClick(index)}>
          Langkah #{index}
        </Button>
      ))}
    </>
  );
};

export default Timeline;

import React from "react";
import Button from "./Button";

const Timeline = ({ timeline, onTimelineItemClick, currentStep }) => {
  return (
    <>
      <h2>History</h2>
      {timeline.map((_, index) => {
        let buttonText = `Langkah #${index}`;

        if (index === 0) {
          buttonText = "Mulai dari awal!";
        }
        return (
          <Button
            active={currentStep === index}
            key={index}
            onClick={() => onTimelineItemClick(index)}
          >
            {buttonText}
          </Button>
        );
      })}
    </>
  );
};

export default Timeline;

import Button from "./Button";
import { useState } from "react";
export default function StartEndButton({
  detector,
  start,
  end,
}: {
  detector: any;
  start: () => void;
  end: () => void;
}) {
  // default state is not started
  const [started, setStarted] = useState<boolean>(false);
  const handleStartClick = () => {
    setStarted(true);
    start();
  };
  const handleEndClick = () => {
    setStarted(false);
    end();
  };
  return (
    <div className="start-end-btn">
      {started ? (
        <Button onClick={handleEndClick}>End</Button>
      ) : (
        <Button onClick={handleStartClick}>Start</Button>
      )}
    </div>
  );
}

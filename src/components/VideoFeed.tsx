import { useRef } from "react";
import Webcam from "react-webcam";
import StartEndButton from "./StartEndButton";
export default function VideoFeed() {
  const webcam = useRef<Webcam>(null);
  const canvas = useRef<HTMLCanvasElement>(null);

  const start = async () => {};
  const end = async () => {};
  return (
    <div className="relative" id="video-feed">
      <canvas ref={canvas} className="absolute z-10 w-full"></canvas>
      <Webcam
        videoConstraints={{
          facingMode: "user",
        }}
        mirrored={true}
        ref={webcam}
        height={webcam.current?.video?.videoHeight}
        width={webcam.current?.video?.videoWidth}
        className="w-full"
      />
      <div id="scatter-gl-container" className="hidden"></div>
      <StartEndButton start={start} end={end}></StartEndButton>
    </div>
  );
}

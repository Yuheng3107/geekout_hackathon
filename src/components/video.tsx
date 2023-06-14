import { useRef } from "react";
import Webcam from "react-webcam";
export default function VideoFeed() {
  const webcam = useRef<Webcam>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
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
    </div>
  );
}

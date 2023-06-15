import { useRef, useEffect, useState } from "react";
import Webcam from "react-webcam";
import StartEndButton from "./StartEndButton";
//MoveNet
import * as poseDetection from "@tensorflow-models/pose-detection";
import "@tensorflow/tfjs-backend-webgl";
// draw lines
import { RendererCanvas2d } from "../utils/renderer_canvas2d";
let isActive: boolean = false;
let rendererCanvas: RendererCanvas2d;
export default function VideoFeed() {
  const [detector, setDetector] = useState<any>(null);
  const webcam = useRef<Webcam>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    // load detector on first render
    loadDetector();
  }, []);
  const start = async () => {
    if (detector === null) return window.alert("loading!");
    assignImgHeight();
    if (webcam.current === null || rendererCanvas === undefined)
      return window.alert("video error");
    isActive = true;
    if (isActive) {
      let poses = await detector.estimatePoses(webcam.current.video);
      await delay(1);
      // add lines
      rendererCanvas.draw([webcam.current.video, poses, false]);
    }
  };
  async function delay(ms: number) {
    // return await for better async stack trace support in case of errors.
    return await new Promise((resolve) => setTimeout(resolve, ms));
  }
  const assignImgHeight = () => {
    if (
      webcam.current === null ||
      webcam.current.video === null ||
      canvas.current === null
    )
      return;

    // set explicit width and height for canvas
    [canvas.current.width, canvas.current.height] = [
      webcam.current.video.width,
      webcam.current.video.height,
    ];

    // get the width and height of the camera (which is used as the basis for tf keypoint calculations)
    let cameraWidth = webcam.current.video.videoWidth;
    let cameraHeight = webcam.current.video.videoHeight;
    rendererCanvas = new RendererCanvas2d(
      canvas.current,
      cameraWidth,
      cameraHeight
    );
  };
  const end = async () => {};
  const loadDetector = async () => {
    const detectorConfig = {
      modelType: poseDetection.movenet.modelType.SINGLEPOSE_LIGHTNING,
    };
    let detectorObject = await poseDetection.createDetector(
      poseDetection.SupportedModels.MoveNet,
      detectorConfig
    );
    setDetector(detectorObject);
  };

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

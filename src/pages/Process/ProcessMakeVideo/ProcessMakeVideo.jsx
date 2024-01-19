import briefResearch from "../../../assets/process-img/brief-research.png";
import scriptConcept from "../../../assets/process-img/script-concept.png";
import storyboard from "../../../assets/process-img/storyboard.png";
import styleIllustrations from "../../../assets/process-img/style-illustrations.png";
import streamlinedStoryboard from "../../../assets/process-img/streamlined-storyboard.png";
import animaticsPreview from "../../../assets/process-img/animatics-preview.gif";
import storyboard1 from "../../../assets/process-img/storyboard.png";
import soundDesign from "../../../assets/process-img/sound-design.png";
import finalProject from "../../../assets/process-img/final-project-launch.jpg";

import StepItem from "./StepItem";

const ProcessMakeVideo = () => {
  const videoProcessData = [
    {
      stepNo: 1,
      stepImg: briefResearch,
      stepName: "Brief & Research",
      stepDescription:
        "In the first stage, we’ll dive deep into gathering as much information as possible on your wishes as well as background and knowledge of your desired topic. This helps us get the resources needed in order to create a video that fulfills the purpose of your video, as well as duration, style, and word-choice.",
    },
    {
      stepNo: 2,
      stepImg: scriptConcept,
      stepName: "Script & Concept",
      stepDescription:
        "You can’t have a good explainer-video without the core storyline being solid. This is where we’ll create a script that is precise, to the point, and reads in the same lingo as your audience. This is a major step along the way to creating your explainer video!",
    },
    {
      stepNo: 3,
      stepImg: storyboard,
      stepName: "Storyboard",
      stepDescription:
        "The 3rd step is where you’ll see the video really come together. The overview (storyboard) will have the basic order and concepts for each individual section of the video and the general layout of the project. Having this down on paper is a vital ingredient necessary to building an explainer video that is smooth and easily digestible to your audience.",
    },
    {
      stepNo: 4,
      stepImg: styleIllustrations,
      stepName: "Style & Illustrations",
      stepDescription:
        "Creating an illustration-style and unique images is what will set your video apart from the other businesses’ content. We understand the importance of having a smooth-flowing thought process in your content, which is why our illustration artists create something that fits into the rest of your content seamlessly.",
    },
    {
      stepNo: 5,
      stepImg: streamlinedStoryboard,
      stepName: "Streamlined Storyboard",
      stepDescription:
        "Before diving into the animation process, we’ll construct a streamlined version of the original storyboard after you’ve approved the illustrations we’ve created. This step will provide a new level of communication and synergy between us, as well as you and your idea for the project. If there’s anything you’d like to see done differently, added, or removed, we’re all ears.",
    },
    {
      stepNo: 6,
      stepImg: animaticsPreview,
      stepName: "Animatics",
      stepDescription:
        "Once we’ve got a common understanding on what needs to be done, we’ll create something called an animatic. Put in simple terms, it is an animated storyboard or a rough draft with a prototype voice-over done in order to establish and smooth out the rhythm and sequence of everything in the video, down to the pauses in between lines of the script.",
    },
    {
      stepNo: 7,
      stepImg: storyboard1,
      stepName: "Finalized Animations",
      stepDescription:
        "Ensuring you’ve got a clean final animation sequence with no hiccups is a key ingredient for your final product. Now our animation artists will go through your video smoothing it out frame by frame until it runs from start to finish flawlessly. This step can be a bit tedious, but makes a world of difference when you receive your final product.",
    },
    {
      stepNo: 8,
      stepImg: soundDesign,
      stepName: "Sound Design",
      stepDescription:
        "The audio for the video is just as important if not more important than the animations themselves. Once you’ve picked the Voice Over artist that you think is best for the project, we’ll go through and do the same smoothing out and finalizing we did with the animations to the audio.",
    },
    {
      stepNo: 9,
      stepImg: finalProject,
      stepName: "Final Project Ready for Launch!",
      stepDescription:
        "Now that everything in your video has been precisely cut, compiled, and mixed, we’ll get a final copy of the project in your hands and formatted to your preference. You can now implement the video and watch your viewers eat it up. Congrats!",
    },
  ];

  return (
    <section className="max-w-[2800px] mx-auto">
      {videoProcessData.map((processStep) => (
        <StepItem key={processStep.stepNo} processStep={processStep} />
      ))}
    </section>
  );
};

export default ProcessMakeVideo;

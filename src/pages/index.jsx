import WorkImage from "../public/work.jpg";
import WrittingImage from "../public/writting.jpg";
import NotesImage from "../public/notes.jpg";
import RealPcImage from "../public/real-pc.jpeg";
import * as businessAnimation from "../public/business-animation.json";
import Lottie from "react-lottie";
import CalculatorSvg from "../public/calculator.svg";
import FinanceImage from "../public/finance.svg";
import Logo from "../public/logo.png";
import Link from "next/link";
import FirstSection from "../containers/Home/FirstSection";
import SectionServices from "../containers/Home/SevicesSection";
import { SecondSection } from "../containers/Home/SecondSection";
import About from "../containers/Home/About";
import { SectionDeal } from "../containers/Home/SectionDeal";

import dynamic from "next/dynamic";
const Animator = dynamic(
  import("react-scroll-motion").then((it) => it.Animator),
  { ssr: false }
);

import { ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";


const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: businessAnimation,
};

export default function Home() {
  return (
    <div >
      <FirstSection />
      <SecondSection />
      <SectionServices />
      <About />
      <SectionDeal />
    </div>
  );
}




"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
  {
    title: "Learn from the Masters",
    description:
      "Gain direct guidance from experienced musicians and industry professionals. Each lesson is designed to build your skills step-by-step, whether you're just starting or perfecting your craft.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white text-xl font-semibold">
          Learn from the Masters
      </div>
    ),
  },
  {
    title: "Play in Real Time",
    description:
      "Join live interactive sessions, jam with instructors, and get instant feedback. Experience the thrill of real-time collaboration with fellow learners and mentors.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white text-xl font-semibold">
        Live music session
      </div>
    ),
  },
  {
    title: "Create & Record Music",
    description:
      "Learn the art of music production, sound design, and recording. Bring your compositions to life using professional tools and techniques taught by expert producers.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white text-xl font-semibold">
        Create & Record Music
      </div>
    ),
  },
  {
    title: "Perform with Confidence",
    description:
      "Master stage presence and express your unique musical identity with confidence. Our performance workshops are designed to help you connect deeply with your audience, refine your stagecraft, and deliver powerful, emotionally resonant performances.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white text-xl font-semibold">
        Perform with Confidence
      </div>
    ),
  },
];


function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={musicSchoolContent}/>
    </div>
  )
}

export default WhyChooseUs
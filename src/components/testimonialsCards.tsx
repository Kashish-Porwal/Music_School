"use client"

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { GridPattern } from "@/components/ui/grid-pattern"; 

const musicSchoolTestimonials = [
  {
    quote:
      'Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!',
    name: 'Alex Johnson',
    title: 'Guitar Student',
  },
  {
    quote:
      "The community and support at this school are unmatched. I've grown not just as a pianist, but also as a performer, thanks to their comprehensive approach.",
    name: 'Samantha Lee',
    title: 'Piano Student',
  },
  {
    quote:
      "This school offered me the tools and confidence to take my singing to the next level. I'm endlessly grateful for the personalized coaching.",
    name: 'Michael Chen',
    title: 'Vocal Student',
  },
  {
    quote:
      'As a violinist, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals and challenges.',
    name: 'Emily Taylor',
    title: 'Violin Student',
  },
  {
    quote:
      'The production courses here opened my eyes to the intricacies of music production. Highly recommend for any aspiring producers!',
    name: 'Chris Morales',
    title: 'Music Production Student',
  },
];

function TestimonialCards() {
  return (
    <div className="relative h-160 w-full overflow-hidden flex flex-col items-center justify-center bg-black text-white">
      <div className="absolute inset-0 z-0">
        <GridPattern
          width={60}
          height={60}
          x={0}
          y={0}
          className="text-white/25 stroke-white/25"
        />
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 z-10">
        Hear Our Harmony : Voices of Success
      </h2>

      <div className="relative z-10 w-full flex justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={musicSchoolTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCards;
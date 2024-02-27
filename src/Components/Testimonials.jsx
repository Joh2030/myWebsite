import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import TestimonialsCard from "./TestimonialsCard";
import Adnan from "../assets/Adnan.png";
import Fred from "../assets/Fred.png";

export default function Testimonials() {
  return (
    <div className="container" style={{ fontFamily: "Roboto", height: "100%" }}>
      <h1 className="text-center mt-4">Testimonials</h1>
      <div className="testimonialsd-flex justify-content-around m-5"></div>
      <div className="container m-5">
        <TestimonialsCard
          logo={Adnan}
          heading="Adnan Hanif, Fullstack web  developer"
          text=" I had the pleasure of working with Joram during my Full-Stack Web Development bootcamp. We worked together as a team on multiple projects. 
          He is gifted with a rare combination of patience, coding skills, and a never-give-up attitude. I'm really impressed by his work ethics, the quality of his work, and his determination to reach the given goals. 
          I am sure he'll be an asset to the next organization he joins."
        />
      </div>
      <div className="container m-5">
        <TestimonialsCard
          logo={Fred}
          heading="Fred Edigi, Fullstack web  developer"
          text="I am delighted to wholeheartedly recommend Joram, a remarkable peer with whom I had the privilege of studying and growing during our coding bootcamp journey. Our shared learning experience was not only enriching but also tremendously enjoyable, thanks to Joram's exceptional qualities, and motivational words
          One of Joram's most exceptional traits is his ability to maintain composure even in the face of adversity. Amidst stressful situations, his calm demeanor and clear-headed approach provide a stabilizing force that significantly contributes to effective problem-solving. This level-headedness undoubtedly played a pivotal role in our shared successes.
          Beyond his technical acumen, Joram's amiable personality shines through in person as well. His friendly and approachable nature makes him not only an enjoyable presence but also a source of positive energy within the team. Joram's tireless dedication, focus on goals, unflappable calmness, and friendly disposition make him an exceptional peer and colleague. I am confident that his contributions will continue to make a significant impact, and I enthusiastically endorse him for any future endeavors. "
        />
      </div>
    </div>
  );
}

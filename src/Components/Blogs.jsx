import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import BlogsCard from "./BlogsCard";
import Kevin from "../assets/kevin.jpg";
import Hooks from "../assets/hooks.jpg";
import Chatgpt from "../assets/chatgpt.jpg";

export default function Blogs() {
  return (
    <div
      className="blogs pt-4"
      style={{ background: "#F0EDCF", fontFamily: "Roboto", height: "80vh" }}
    >
      <h1 className="text-center text-3xl font-bold m-5">Blogs</h1>

      <div className="container d-flex justify-content-between flex-wrap">
        <div className="Blog1">
          <BlogsCard
            img={Hooks}
            heading="React Hooks Cheatsheet"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ratione
        dolore in dolor quam veniam tenetur aperiam, deserunt similique sequi,
        magnam ipsa, laborum consequatur itaque asperiores vitae dignissimos.
        Provident, expedit."
          />
        </div>
        <div className="Blog1">
          <BlogsCard
            img={Chatgpt}
            heading="How to use ChatGPT in daily Life"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ratione
        dolore in dolor quam veniam tenetur aperiam, deserunt similique sequi,
        magnam ipsa, laborum consequatur itaque asperiores vitae dignissimos.
        Provident, expedit. "
          />
        </div>
        <div className="Blog1">
          <BlogsCard
            img={Hooks}
            heading="Frontend Optimization Checklist"
            text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ratione
            dolore in dolor quam veniam tenetur aperiam, deserunt similique sequi,
            magnam ipsa, laborum consequatur itaque asperiores vitae dignissimos.
            Provident, expedit."
          />
        </div>
      </div>
    </div>
  );
}

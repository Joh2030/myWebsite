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
      className="blogs p-5"
      style={{ background: "#F0EDCF", fontFamily: "Roboto", height: "100%" }}
    >
      <h1 className="text-center text-3xl font-bold m-5">Blogs</h1>
      <div className="container-blogs text-center d-flex justify-content-around mt-8">
        <div className="Blog1">
          <div className="flex justify-between my-4">
            <BlogsCard
              img={Hooks}
              heading="React Hooks Cheatsheet"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ratione
        dolore in dolor quam veniam tenetur aperiam, deserunt similique sequi,
        magnam ipsa, laborum consequatur itaque asperiores vitae dignissimos.
        Provident, expedit."
            />
          </div>
        </div>
        <div className="Blog1">
          <div className="justify-between my-4">
            <BlogsCard
              img={Chatgpt}
              heading="How to use ChatGPT in daily Life"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ratione
        dolore in dolor quam veniam tenetur aperiam, deserunt similique sequi,
        magnam ipsa, laborum consequatur itaque asperiores vitae dignissimos.
        Provident, expedit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
          </div>
        </div>
        <div className="Blog1">
          <div className="justify-between my-4">
            <BlogsCard
              img={Kevin}
              heading="Frontend Optimization Checklist"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ratione
        dolore in dolor quam veniam tenetur aperiam, deserunt similique sequi,
        magnam ipsa, laborum consequatur itaque asperiores vitae dignissimos.
        Provident, expedit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

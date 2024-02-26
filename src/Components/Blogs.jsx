import React from "react";
import "../App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import BlogsCard from "./BlogsCard";
import Kevin from "../assets/kevin.jpg";

export default function Blogs() {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold mt-8">Blogs</h1>
      <div className="Blog1">
        <div className="flex justify-between my-4">
          <BlogsCard
            img={Kevin}
            heading="Frontend Optimization Checklist"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ratione
        dolore in dolor quam veniam tenetur aperiam, deserunt similique sequi,
        magnam ipsa, laborum consequatur itaque asperiores vitae dignissimos.
        Provident, expedit."
          />
        </div>
      </div>
      <div className="Blog1">
        <div className="flex justify-between my-4">
          <BlogsCard
            img={Kevin}
            heading="Frontend Optimization Checklist"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ratione
        dolore in dolor quam veniam tenetur aperiam, deserunt similique sequi,
        magnam ipsa, laborum consequatur itaque asperiores vitae dignissimos.
        Provident, expedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ratione
        dolore in dolor quam veniam tenetur aperiam, deserunt similique sequi,
        magnam ipsa, laborum consequatur itaque asperiores vitae dignissimos.
        Provident, expedit."
          />
        </div>
      </div>
    </div>
  );
}

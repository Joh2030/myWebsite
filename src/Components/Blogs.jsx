import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import BlogsCard from "./BlogsCard";
import Kevin from "../assets/kevin.jpg";

export default function Blogs() {
  return (
    <div className="blogs mt-5" style={{ height: "100vh" }}>
      <h1 className="text-center text-3xl font-bold m-5">Blogs</h1>
      <div className="container-blogs text-center d-flex justify-content-around flex-wrap mt-8">
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

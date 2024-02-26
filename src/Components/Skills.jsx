import React from "react";
import "../App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SkillsCard from "./SkillsCard";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import HTML from "../assets/html5.png";
import CSS from "../assets/css3.png";
import JS from "../assets/js.png";
import ExpressJS from "../assets/icons8-express-js-50.png";
import MongoDB from "../assets/icons8-mongodb-48.png";
import NodeJS from "../assets/nodejs.png";
import ReactJS from "../assets/react.png";
import SQL from "../assets/sql.png";
import Tailwindcss from "../assets/tailwindcss.svg";
import Bootstrap from "../assets/bootstrap.png";
import Postgresql from "../assets/database.png";

export default function Skills() {
  return (
    <div>
      <h1 className="text-center mt-4">Skills</h1>
      <div className="container ">
        <SkillsCard
          logo={HTML}
          heading="HTML"
          text="HTML, which stands for HyperText Markup Language, is the standardized language utilized for crafting and formatting documents on the global web. It acts as the foundational element for web pages, delineating the structure and content through a system of tags. "
        />
      </div>
      <div className="container">
        <SkillsCard
          logo={CSS}
          heading="CSS"
          text="CSS, or Cascading Style Sheets, is a vital technology in web development that complements HTML. It enables the presentation and layout of HTML elements, allowing developers to style and design web pages with various visual attributes. With CSS, designers can control aspects such as fonts, colors, spacing, and positioning, ensuring a consistent and appealing look across a website. "
        />
      </div>
      <div className="container ">
        <SkillsCard
          logo={JS}
          heading="Javascript"
          text="JavaScript is a versatile programming language that plays a pivotal role in web development. Initially designed for client-side scripting to enhance the interactivity of web pages, it has evolved into a multi-paradigm language that can be used on both the client and server sides. JavaScript enables the creation of dynamic, interactive content by manipulating the Document Object Model (DOM) of HTML pages."
        />
      </div>
      <div className="container">
        <SkillsCard
          logo={ExpressJS}
          heading="ExpressJS"
          text="Express.js is a minimalist and flexible web application framework for Node.js, designed to simplify the process of building robust and scalable web applications and APIs. It provides a set of features and tools for handling HTTP requests and responses, routing, middleware integration, and more. "
        />
      </div>
      <div className="container">
        <SkillsCard
          logo={MongoDB}
          heading="MongoDB"
          text="MongoDB is a popular NoSQL database system that provides a flexible and scalable solution for handling large volumes of data. It falls under the category of document-oriented databases, storing data in BSON (Binary JSON) format. MongoDB is known for its ability to store, manage, and retrieve unstructured or semi-structured data, making it suitable for a variety of applications."
        />
      </div>
      <div className="container">
        <SkillsCard
          logo={NodeJS}
          heading="NodeJS"
          text="Node.js is an open-source, server-side JavaScript runtime environment that enables the execution of JavaScript code outside a web browser. It is built on the V8 JavaScript runtime engine, developed by Google for the Chrome browser. Node.js allows developers to use JavaScript for server-side scripting, making it a versatile and powerful technology for building scalable and high-performance web applications."
        />
      </div>
      <div className="container">
        <SkillsCard
          logo={ReactJS}
          heading="React"
          text="React, is an open-source JavaScript library for building user interfaces (UIs) or user interface components, particularly for single-page applications where the content dynamically updates as users interact with the application. Developed and maintained by Facebook, React has gained widespread adoption due to its declarative and efficient approach to building UIs."
        />
      </div>
      <div className="container">
        <SkillsCard
          logo={SQL}
          heading="SQL"
          text="Structured Query Language, is a standard programming language designed for managing and manipulating relational databases. It provides a set of commands and syntax for interacting with relational database management systems (RDBMS) to perform tasks such as querying data, updating records, inserting new data, and managing database structures."
        />
      </div>
      <div className="container ">
        <SkillsCard
          logo={Tailwindcss}
          heading="Tailwindcss"
          text="Tailwind CSS is a utility-first CSS framework that simplifies the process of building modern and responsive web designs. It provides a set of low-level utility classes that can be applied directly to HTML elements, offering a pragmatic and efficient approach to styling. Tailwind does not impose pre-designed components or styles but rather focuses on providing building blocks for developers to construct their own designs."
        />
      </div>
      <div className="container ">
        <SkillsCard
          logo={Bootstrap}
          heading="Bootstrap"
          text="Bootstrap is a popular open-source front-end framework developed by Twitter. It provides a collection of pre-designed and responsive components, styles, and JavaScript plugins to streamline the process of building modern and visually appealing websites and web applications."
        />
      </div>
      <div className="container ">
        <SkillsCard
          logo={Postgresql}
          heading="Postgresql"
          text="PostgreSQL, often referred to as Postgres, is a powerful open-source relational database management system (RDBMS). It is known for its advanced features, extensibility, and compliance with SQL standards. PostgreSQL supports both SQL (Structured Query Language) and procedural languages, allowing developers to build complex and dynamic database-driven applications."
        />
      </div>
    </div>
  );
}

import React from "react";
import Header from "../common/header";
import Footer from "../common/footer";
import { useReducerContext } from "../../Context/context";

const Contact = () => {
  const { state, dispatch } = useReducerContext();
  return (
    <div
      className={`flex justify-between flex-col h-screen p-4 ${
        state.theme ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <Header />
      <main className="m-36 border flex flex-col justify-center items-center">
        <h1 className="text-3xl mb-2">Contact Me</h1>
        <p>
          Created By :{" "}
          <span className="hover:underline cursor-pointer">
            Rohit Phalke
          </span>
        </p>
        <p>
          Phone No : <span>+91 7499628888</span>
        </p>
        <p>
          Email Id : <span>user@gmail.com</span>
        </p>
        <p>
          Github Id :
          <a
            className="hover:underline cursor-pointer"
            href="https://github.com/dashboard"
            target="_blank"
          >
            https://github.com/dashboard
          </a>
        </p>
        <p>
          LinkedIn Id :{" "}
          <a
            className="hover:underline cursor-pointer"
            href="https://www.linkedin.com/feed/"
            target="_blank"
          >
            https://www.linkedin.com/feed/
          </a>
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
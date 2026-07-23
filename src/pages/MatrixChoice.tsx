import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import MorpheusImg from "../assets/images/morpheus-choose.png";

const MatrixChoice: React.FC = () => {
  const navigate = useNavigate();
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".morpheus", {
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })
      .from(".choice-text", {
        opacity: 0,
        y: 40,
        duration: .6
      })

      .to(".glitch-red", {
        opacity: .8,
        x: -5,
        duration: .05
      })

      .to(".glitch-blue", {
        opacity: .8,
        x: 5,
        duration: .05
      }, "<")

      .to([".glitch-red", ".glitch-blue"], {
        opacity: 0,
        x: 0,
        duration: .08
      })
      .from(
        ".red-pill",
        {
          opacity: 0,
          x: -120,
          duration: 0.6,
        }
      )
      .from(
        ".blue-pill",
        {
          opacity: 0,
          x: 120,
          duration: 0.6,
        },
        "<"
      );

    // Floating animation
    gsap.to(".morpheus", {
      scale: 1.02,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

  }, { scope: pageRef });

  return (
    <div
      ref={pageRef}
      className="w-screen h-screen bg-black flex flex-col items-center justify-center"
    >
      <img
        src={MorpheusImg}
        className="morpheus w-125 filter brightness-30"
      />

      <div className="relative mb-8">
        <h1 className="choice-text font-[matrix] text-zinc-500 text-4xl font-bold relative z-10">
          Choose wisely...
        </h1>

        <h1 className="glitch-red font-[matrix] absolute inset-0 text-red-500 text-4xl font-bold opacity-0">
          Choose wisely...
        </h1>

        <h1 className="glitch-blue font-[matrix] absolute inset-0 text-cyan-400 text-4xl font-bold opacity-0">
          Choose wisely...
        </h1>
      </div>

      <div className="flex gap-32">

        <button
          onClick={() => navigate("/redpill")}
          className="red-pill w-26 h-16 rounded-full bg-red-800 hover:bg-red-600 cursor-pointer"
        />

        <button
          onClick={() => navigate("/")}
          className="blue-pill w-26 h-16 rounded-full bg-blue-800 hover:bg-blue-600 cursor-pointer"
        />

      </div>
    </div>
  );
};

export default MatrixChoice;
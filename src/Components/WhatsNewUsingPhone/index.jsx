/** @format */

import React, { useEffect, useState } from "react";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import { classNames } from "../../Utils/classNames";
import { CSSTransition } from "react-transition-group";
// import css for animation
import "./index.css";

const features = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
    icon: LockClosedIcon,
  },
  {
    name: "Database backups.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
    icon: ServerIcon,
  },
  {
    name: "Atharva Panegai Feature",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
    icon: LockClosedIcon,
  },
  {
    name: "Database backups.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna..",
    icon: ServerIcon,
  },
];

const FeaturesComponent = ({ feature, index }) => {
  return (
    <div
      className={classNames(
        "flex items-center space-x-4 p-4 w-1/3 rounded-xl m-10",
        index % 2
          ? "bg-gradient-to-r from-cyan-500 to-blue-500 ml-48"
          : "bg-gradient-to-r from-violet-500 to-fuchsia-500"
      )}>
      <div className='w-10 h-10 flex items-center justify-center  text-white rounded-full'>
        <feature.icon className='h-10 w-10 mt-1 text-white' />
      </div>
      <div className='flex flex-col'>
        <h2 className='text-lg font-bold text-white'>{feature.name}</h2>
        <p className=''>{feature.description}</p>
      </div>
    </div>
  );
};

const WhatsNewUsingPhone = () => {
  const [showWhatsNew, setShowWhatsNew] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWhatsNew(false);
    }, 3000); // Set the duration in milliseconds (3 seconds in this case)

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className='background-img-new-features'>
      <CSSTransition
        in={showWhatsNew}
        timeout={500} // Set the animation duration in milliseconds (0.5 seconds in this case)
        classNames='whats-new'
        unmountOnExit>
        <div className='flex items-center h-full'>
          <h1 className='absolute top-1/2 left-2 right-0 text-white text-3xl font-bold mb-4'>
            What's New
          </h1>
        </div>
      </CSSTransition>
      {!showWhatsNew && (
        <div className='flex justify-start flex-col overflow-y-auto max-h-screen scroll-container'>
          <div><h1 className="absolute mb-10 text-white font-bold text-2xl p-5">What's New</h1></div>
          {features.map((feature, i) => {
            return <FeaturesComponent feature={feature} index={i} />;
          })}
        </div>
      )}
    </div>
  );
};

export default WhatsNewUsingPhone;

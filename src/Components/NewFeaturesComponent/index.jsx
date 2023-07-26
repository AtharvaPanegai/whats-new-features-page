/** @format */

import {
    BoltIcon,
    CloudArrowUpIcon,
    LockClosedIcon,
    ServerIcon,
  } from "@heroicons/react/20/solid";
  
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
      name: "Push to deploy.",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
      icon: BoltIcon,
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
  
  const FeatureComponent = ({ feature }) => {
    return (
      <div
        key={feature.name}
        className='relative pl-9 pr-9 pt-2 pb-2 ml-5 mr-5 rounded-xl '>
        <dt className='inline font-semibold text-white'>
          <div className='flex-none w-12 h-12 bg-gray-700 text-cyan-400 rounded-lg flex items-center justify-center'>
            <feature.icon
              className='h-6 w-6 bg-gray-700 text-cyan-400 rounded-lg'
              aria-hidden='true'
            />
          </div>
          {feature.name}
        </dt>{" "}
        <dd className='inline text-slate-400'>{feature.description}</dd>
      </div>
    );
  };
  
  export default function NewFeaturesComponent() {
    return (
      <div className='bluesh-dark-bg'>
        {/* first title and basic info div */}
        <div>
          <div className='mx-auto max-w-2xl lg:text-center pt-10 mb-10'>
            <h2 className='text-base font-semibold leading-7 text-indigo-600'>
              Let's see
            </h2>
            <p className='mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              What's New ?
            </p>
            <p className='mt-6 text-md text-slate-400'>
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
              Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
              In mi viverra elit nunc.
            </p>
          </div>
        </div>
        {/* image div */}
        <div className='flex justify-center ml-10 mr-10 -mb-3 border-gray-500 border-1'>
          <img
            alt='product'
            className='rounded-xl'
            src='https://res.cloudinary.com/atharvapanegai/image/upload/v1690720082/Screenshot_2023-07-30_175751_r8i6bg.png'
          />
        </div>
        {/* features */}
        <div className='mt-10 pb-10 backdrop-blur-md'>
          <dl className='grid max-w-xl gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-8'>
            {features.map((feature) => {
              return <FeatureComponent feature={feature} />;
            })}
          </dl>
        </div>
      </div>
    );
  }
  
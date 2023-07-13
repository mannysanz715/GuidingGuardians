/* eslint-disable @next/next/no-img-element */
const SubBanner = () => {
  return ( 
    <div className="flex flex-col justify-center items-center mt-16 gap-7">
      <h2 className="font-bold text-4xl">Make tutoring easy and fun!</h2>
      <p className="text-base text-color  text-center">With Guiding Guardians, help your child with schoolwork in no time. Our AI powered chatbot helps you and your <br/> child walk through problems with step-by-step help, example problems, and more!</p>
      <img className="mt-9" src="/assets/line.png" alt="line"/>
    </div>
  );
}

export default SubBanner;
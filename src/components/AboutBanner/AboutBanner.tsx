type propsTypes = {
    image : string
    title : string
    info : string
  }
  
  const AboutBanner = ({ image, title, info } : propsTypes) => {
    return ( 
      <div className="flex flex-row gap-px align-center info-background max-w-screen-max rounded-3xl py-10 px-20 my-4 max-h-60 ">
         <img className="w-28 h-28 mr-20 ml-5" src={image} alt={title}/>
         <div className="">
        <h3 className="text-xl font-bold text-start mt-2">{title}</h3>
        <p className="w-56 col-2 text-start w-full mt-2 overflow-x-scroll">{info}</p>
        </div>
      </div>
    );
  }
  
  export default AboutBanner;


type propsTypes = {
    image : string
    name : string
    title : string
    linkedin : string
  }
  
  const TeamCard = ({ image, name, title, linkedin } : propsTypes) => {
    return ( 
      <div className="flex flex-col w-1/4 h-5/6 gap-5  items-center border rounded-lg">
        <img className="w-fit rounded-t-lg h-xl photo-height" src={image} alt="profile photo"/>
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="w-56 text-center text-color">{title}</p>
        <a href={linkedin} target="_blank">
          <img src="https://imgur.com/mQuEctQ.png" alt="Linkedin logo" className="w-16 hover:opacity-80" />
        </a>
      </div>
    );
  }
  
  export default TeamCard;
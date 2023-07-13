/* eslint-disable @next/next/no-img-element */
type propsTypes = {
  image : string
  title : string
  info : string
}

const InfoCard = ({ image, title, info } : propsTypes) => {
  return ( 
    <div className="flex flex-col w-fit gap-5  items-center">
      <img className="w-28" src={image} alt={title}/>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="w-56 text-center text-color">{info}</p>
    </div>
  );
}

export default InfoCard;
import InfoCard from "../InfoCard/InfoCard";

const InfoSection = () => {
  return ( 
    <div className="flex justify-between items-start px-40 my-20">
      <InfoCard image='/assets/earth.png' title='Real world examples' info='Ask the our chatbot to give real world examples to contextualize learning' />
      <InfoCard image='/assets/lightbulb.png' title='Learning over answers' info='We prioritize learning by providing step-by-step walkthroughs of problems, rather than simply providing an answer' />
      <InfoCard image='/assets/books.png' title='Feedback for every subject' info='Our chatbot provides help on any subject, including math, english, science and history' />
    </div>
  );
}

export default InfoSection;
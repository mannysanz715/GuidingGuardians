import TeamCard from "../TeamCard/TeamCard";

const TeamAbout = () => {
  return ( 
    <>
    <div className="flex flex-col items-center px-40 my-20 w-screen">
    <h1 className="text-3xl font-bold max-w-lg text-center mb-3">Meet Our Team!</h1>
    <div className="flex justify-between items-start px-40 my-20 ">    
      <TeamCard image="/assets/manny.png" name="Manny Sanchez" title="Developer" linkedin="https://www.linkedin.com/in/manuel-sanchez-leandro/" />
      <TeamCard image="/assets/bee.png" name="Bee Johnson" title="Developer" linkedin="https://www.linkedin.com/in/beejohnson/" />
      <TeamCard image="/assets/dave.png" name="Dave Kobrin" title="Developer" linkedin="https://www.linkedin.com/in/david-kobrin-developer-in-nj/" />
    </div>
    </div>
    </>
  );
}

export default TeamAbout;
import AboutBanner from "../AboutBanner/AboutBanner";

const AppInfo = () => {
  return ( 

    <div className="flex flex-col items-center px-40 my-20 w-screen">
        <h1 className="text-2xl font-bold max-w-lg text-center mb-3">Welcome to Guiding Guardians, your trusted companion for homework help!</h1>
      <AboutBanner image='/assets/gradhat.png' title='Our Mission' info="We are an AI-powered chatbot designed to assist parents, guardians, sitters, and tutors in supporting their children with homework and academic tasks. Our mission is to make learning a collaborative and enjoyable experience for both parents and students. At Guiding Guardians, we understand the challenges parents face when it comes to helping their children with homework. The ever-changing educational landscape, complex subject matter, and busy schedules can make it difficult to provide the necessary guidance and support. That's where we come in. Our chatbot leverages the power of artificial intelligence to simplify the process and empower parents to become effective mentors." />
      <AboutBanner image='/assets/chatbubble.png' title='How it Works' info="Our chatbot employs a conversational interface that encourages open communication and facilitates a deeper understanding of subjects. Whether it's math, science, language arts, or any other subject, our platform provides step-by-step explanations, practice exercises, and useful resources to enhance your child's comprehension and problem-solving skills." />
      <div className="flex flex-row gap-px align-center info-background max-w-screen-max rounded-3xl py-10 px-20 my-4">
         <img className="w-28 h-28 mr-20 ml-5 mt-8" src='/assets/handshake.png' alt='Working together towards Success'/>
         <div className="">
        <h3 className="text-xl font-bold text-start">Working together towards Success</h3>
        <p className="w-56 col-2 text-start w-full mt-2">We believe that collaboration between parents, students, and educators is key to unlocking academic success. Guiding Guardians serves as a bridge, connecting parents with the tools and knowledge they need to support their children effectively. We aim to strengthen the parent-child bond by promoting a positive learning environment where questions are encouraged, challenges are embraced, and accomplishments are celebrated.</p>
        <p className="w-56 col-2 text-start w-full mt-5">Thank you for choosing Guiding Guardians as your partner in education. We are here to support you every step of the way and help your child thrive academically. Together, we can build a brighter future for our young learners.</p>
        </div>
      </div>
    </div>

    
  );
}

export default AppInfo;
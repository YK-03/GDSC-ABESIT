import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

function Contributors() {

  //   Contribute here guys!! Idhar udhar mat nikal jaana (ㆆ_ㆆ)
  const ContributorData = [
    {
      id: 1,
      name: "Chirag Ramesh Chandra",
      img: "https://media.licdn.com/dms/image/D4D03AQF3Rrlg-Uls1w/profile-displayphoto-shrink_400_400/0/1692046813033?e=1701907200&v=beta&t=Ad_JDZC_bVD4Th-MMQrcnVswbasn5vrsOiXobar6yd4",
      role: "App Developer",
      social1: "https://twitter.com/chiragchandra25",
      social2: "https://github.com/Chiragramesh25",
      desc: "Funniest guy in the room (that's what he said)"
    },
    {
      id: 2,
      name: "Ishaan",
      img: "https://avatars.githubusercontent.com/u/113186458?v=4",
      role: "Open Source",
      social1: "https://twitter.com/Ishaan2053",
      social2: "https://github.com/Ishaan2053",
      desc: "Secretive even when all he has to hide is a 10 ki chocolate"
    },
    {
      id: 3,
      name: "Pranav Tripathi",
      img: "https://github.com/prnvtripathi.png",
      role: "Web Developer",
      social1: "https://x.com/prnvtwts",
      social2: "https://github.com/prnvtripathi",
      desc: "The guy who's always in a hurry",
    },
    {
      id: 4,
      name: "Ganesh",
      img: "https://github.com/gpratap608.png",
      role: "Contributor",
      social1: "https://twitter.com/ganeshontwt",
      social2: "https://github.com/gpratap608",
      desc: "Can be Painfully Sarcastic sometimes :)",
    },
    {
      id: 147,
      name: "Vikash Kumar",
      img: "https://github.com/Vikash-Rautela/PortfolioF/blob/master/src/assets/imageself.jpeg?raw=true",
      role: "Contributor",
      social1: "https://twitter.com/vikash-rautela",
      social2: "https://github.com/Vikash-Rautela",
      desc: "Be with your own limitless definetion",
    },
    {
      id: 2102901550041,
      name: "Vansh Goel",
      img : "https://github.com/vanshgoel18.png",
      role: "Contributor",
      social1:"https://www.linkedin.com/in/vansh-goel-100928221/",
      social2:"https://twitter.com/GoelVansh_19",
      desc : " ",
    },
    {
      id: 5,
      name: "Kabir",
      img: "https://avatars.githubusercontent.com/u/147363110?v=4",
      role: "App Development Contributor",
      social1: "https://twitter.com/KabirShukl",
      social2: "https://www.linkedin.com/in/kabir-shukla-396247233/",
      desc: "Aspiring Jim Halpert"
    },
    {
       id: 2102900100069,
       name: "Khushi Sharma",
       img: "https://media.licdn.com/dms/image/D5603AQG-xgh_HxEbQg/profile-displayphoto-shrink_800_800/0/1685025455265?e=1702512000&v=beta&t=lHmvIQr7UVogVEfzE4Wh-hI_edcLtPNJcOULXvx28TA",
       role: "Web Developer",
       social1: "https://twitter.com/ikhushisharmaa",
       social2: "https://www.linkedin.com/in/khushisharma4/",
       desc: "Always laughing at lame jokes, hehe."
     },
    {
        id:2002900100107 ,
        name: "Prakhar Sharma",
        img: "https://media.licdn.com/dms/image/D4D35AQHgWi8m7f6mhg/profile-framedphoto-shrink_200_200/0/1694496829155?e=1697454000&v=beta&t=4oN4nz1IDv_IYDv9A7lTN8UcfsvjqqYOjCm_CRCcQt8",
        role: "contributer",
        social1: "www.linkedin.com/in/prakhar-sharma-96a831272",
        social2: "",
        desc: "Java developer,learner"
    },
      {
        id: "2021CSAi034",
        name: "Prerit Saxena",
        img: "https://avatars.githubusercontent.com/u/112962509?s=400&u=b3fd6fe26d13da948a5b0191d7aeca436baa4d5c&v=4",
        role: "Full Stack Web Developer",
        social1: "https://www.linkedin.com/in/prerit-saxena-930774229",
        social2: "https://github.com/PreritSaxena",
        desc: "Don't Get Motivated , get obsessed  "
      },
    {
          id: 2102900100080 ,
          name: "Manish Keshwani",
          img: "https://avatars.githubusercontent.com/u/113196913?v=4",
          role: "Web Developer",
          social1: "https://twitter.com/keshwani2002",
          social2: "https://www.linkedin.com/in/manish-kumar-keshwani-052b61243/",
          desc: "Once a nerd, always a nerd."
        },
    {
      id: 2202901540039,
          name: "Ashiya Rana",
          img: "https://github.com/Ashiyarana12.png",
          role: "Contributor",
          social1: "https://www.linkedin.com/in/ashiya-rana-8ba667251/",
          social2: "https://github.com/Ashiyarana12",
          desc: "just testing "
    },
    {
    id: 2202900100138,
        name: "Pratyush Mathur",
        img: "https://github.com/Shoto0095.png",
        role: "Contributor",
        social1: "https://www.linkedin.com/in/pratyush-mathur-35a1a2251/",
        social2: "https://github.com/Shoto0095",
        desc: "Just testing things ;) "
    },
     {
      id: 2202900100165,
      name: "Shirshak Kumar",
      img: "https://github.com/shirshakk.png",
      role: "App Development Contributor",
      social1: "https://twitter.com/kshirshak76",
      social2: "https://www.linkedin.com/in/shirshak-kumar-5ba790253",
      desc: "Aspiring Jim Halpert"
    },
     {
        id: "2202900100070" ,
        name: "Daksh Agarwal",
        img: "https://avatars.githubusercontent.com/u/133400136?v=4",
        role: "Contributor",
        social1: "https://www.linkedin.com/in/dakshagarwal5/",
        social2: "https://twitter.com/Dakshagarwal_5",
        desc: ""
      },
    {
      id:2202900100091,
      name: "Himanshi Rana",
      img: "https://avatars.githubusercontent.com/u/139847752?v=4",
      role: "Contributor",
      social1: "https://www.linkedin.com/in/himanshi-rana-b4b9b9251/",
      social2: "https://github.com/himanshirana2403",
      desc: ""
    },
    {
      id: 2202901520127,
      name: "Pulkit Gahlot",
      img: "https://avatars.githubusercontent.com/u/87379387?s=400&u=5ed5f79d454863f8b3c2a44a6417709d250800c4&v=4",
      role: "Contributor",
      social1: "https://www.linkedin.com/in/pulkit-gahlot-399187251/",
      social2: "https://twitter.com/Pulkit_1527",
      desc: "Maybe/Maybe not :p"
    },
    {
      id:2202901520184,
      name:"vansh giri",
      img:"https://photos.fife.usercontent.google.com/pw/ADCreHcth-T82S-rDG9bXZKw3lRXIru3e5SFaTwKOutQq5RFvHG3g3tNmFAi=w164-h219-no?authuser=0",
      role:"App Development Contributor",
      social1:"https://www.linkedin.com/in/vansh-giri-b8565b295/",
      social2:"https://github.com/",
      desc:"coding",
    },
    {
        id: 2102901550042,
        name: "Vishal kumar Pandey",
        img: "https://github.com/VishaaLPandey.png",
        role: "Contributor",
        social1: "https://twitter.com/pandeytwt?t=UlEC380rSrTVri0IM6otLw&s=09",
        social2: "https://github.com/VishaaLPandey",
        desc: "A Curious guy who is everywhere in Tech and Sports."
    },
    {
        id: 2202900100147,
        name: "Rishikesh Gupta",
        img: "https://avatars.githubusercontent.com/u/112187328?v=4",
        role: "Contributor",
        social1: "https://www.instagram.com/pranjalll_x_beyonder/",
        social2: "https://www.youtube.com/@beyonder001",
        desc: "yup buddy!! all good ?"
      },
    {
        id: "22029",
        name: "Amit Verma",
        img: "https://github.com/amitverma147.png",
        role: "Developer",
        social1: "https://twitter.com/Amit_v6",
        social2: "https://www.instagram.com/amitv.147/",
        desc: "Memes Lover!!"
      },
    {
        id: 2102901540039,
        name: "chirag sharma",
        img: "https://media.licdn.com/dms/image/D5603AQGE3RWCobTtcA/profile-displayphoto-shrink_800_800/0/1674494672539?e=1702512000&v=beta&t=FBDX2pqcQsKCyZ5fHpjUM8jB2vSSCvrlnt_gB1INwn4",
        role: "open source contributor",
        social1: "https://twitter.com/itschirag24",
        social2: "https://github.com/24chirag",
        desc: "Frontend  developer as well as Machine learning enthusiast"
    },
    {
        id: 2202900100071,
        name: "Darshil Kumar",
        img: "https://avatars.githubusercontent.com/u/91634586?v=4",
        role: "Contributor",
        social1: "https://twitter.com/Darshil88505969",
        social2: "https://www.linkedin.com/in/not-darshil-kumar/",
        desc: "Life is too short for bad vibes."
      },
      {
      id: 2202900100009,
      name: "Abhinav Gupta",
      img: "https://avatars.githubusercontent.com/u/132747736?v=4",
      role: "Contributor",
      social1: "https://linktr.ee/abhinav_cse",
      social2: "https://www.linkedin.com/in/abhinav-gupta-cs/",
      desc: "You are the CSS to my HTML"
    },
     {
         id: 197 ,
         name: "Yash Kaushik",
         img: "",
         role: "Contributor",
         social1: "https://www.linkedin.com/in/yash-kaushik-45b200258",
         social2: "",
         desc: ""
       },

    
    // Use this template below
    // {
    //     id: 2202901540039,
    //     name: "",
    //     img: "",
    //     role: "",
    //     social1: "",
    //     social2: "",
    //     desc: ""
    //   },
  ];


  // Do not touch this return function guys!(ㆆ_ㆆ) 
  // Bahaut mehnat se banaya hai yaar. Upar jaao wapis （*＾-＾*）
  return (
    <div className="bg-white w-full py-5">
      <section className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="px-4 pb-16 pt-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900  sm:text-4xl md:mx-auto">
                Our awesome{" "}
                <span className="text-yellow-500">Contributors</span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                The list of people who've successfully contributed with this
                hands-on workshop. Get your name on GDSC's website too!
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
            >
              {" "}
              {ContributorData &&
                ContributorData.map((member) => {
                  return (
                    <div key={member.id}>
                      <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <img
                          className="object-cover w-full h-56 md:h-64 xl:h-80"
                          src={member.img}
                          alt={member.name}
                        />
                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                          <p className="mb-1 text-lg font-bold text-gray-100">
                            {member.name}
                          </p>
                          <p className="mb-4 text-xs text-gray-100">
                            {member.role}
                          </p>
                          <p className="mb-4 text-xs tracking-wide text-gray-400">
                            {member.desc}
                          </p>

                          <div className="flex items-center justify-center space-x-3">
                            <SocialIcon
                              url={member.social1}
                              target="_blank"
                              style={{ height: 35, width: 35 }}
                              bgColor="black"
                            />

                            <SocialIcon
                              url={member.social2}
                              target="_blank"
                              style={{ height: 35, width: 35 }}
                              bgColor="black"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

// Bola tha na Upar jaao ( ˘︹˘ ) 

export default Contributors;

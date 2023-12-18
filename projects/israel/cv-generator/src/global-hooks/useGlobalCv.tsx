import { createContext, useState, useContext, useEffect } from "react";

export interface IExpirience {
    from: Date;
    to: Date;
    title: string;
    job_description: string;
}

export interface ICv {
  name: string;
  title: string;
  email: string;
  photoUrl: string;
  linkedin: string;
  phone: string;
  summary: string;
  skills: string[];
  experienceList: IExpirience[];
  color: string;
}

export const initialCv: ICv = {
  "name": "Shlomi Yahbes",
  "title": "Junior Front End Developer (React.js)",
  "email": "syahbes@gmail.com",
  "linkedin": "https://www.linkedin.com/in/shlomi427/",
  "photoUrl": "https://lh3.googleusercontent.com/a-/AD_cMMRz19s5-64RfG9I6C4vtxrrICreGNdCueAPOuFbxZ5yMQ=s130-p-k-rw-no",
  "phone": "+972-58-4271986",
  "summary": `I am a highly motivated, self-directed, and English-speaking web developer with a strong passion for
  problem-solving. With experience in React.js and TypeScript, I am able to design and build modern user
  interface components. I have in-depth knowledge of JavaScript, CSS, and HTML, and familiarity with tools
  such as Git and Redux. Eager to learn and take on new challenges, I believe I have the skills and motivation
  needed to be a valuable asset to a front-end development team.`,
  "skills": ['React.js', ' TypeScript', ' Redux', ' Git', ' HTML/CSS', ' JavaScript', ' MongoDB', ' Node.js', ' Express', ' MERN', ' React Native', 'Firebase', ' Browser-based debugging and know how to Google'],
  "experienceList": [
    {
      "from": new Date(),
      "to": new Date(),
      "title": "Front-End Developer (Volunteer), Code for Israel (2022-present)",
      "job_description": `Collaborated with a team of volunteers to plan and implement mobile application projects using React Native
      and Redux technologies
Utilized in-depth knowledge of JavaScript, CSS, and HTML, as well as React Native to create user interfaces
Employed Git for version control and collaboration
Worked with the development team to integrate the front-end with the back-end Django REST API
      Developed reusable components to improve code efficiency and maintainability`,
    },
    {
      "from": new Date(),
      "to": new Date(),
      "title": "Demand Generation, SAP (2021-present)",
      "job_description": `Developed and executed demand generation campaigns leading to a 20% increase in leads and a 15%
      increase in sales
      Collaborated with sales and marketing teams to align demand generation efforts with business objectives
      Utilized marketing automation software to streamline campaign execution and reporting`
    }
  ],
  color: "rgba(0,0,0,1)",
}

export const initialExperience: IExpirience = {
    from: new Date(),
    to: new Date(),
    title: '',
    job_description: '',
  };

type ICvContext = {
    cvData: ICv,
    setCvData: (cv: ICv) => void,
};

const CvContext = createContext<ICvContext | null>(null);

export function CvProvider(props: any) {
  const storeData = localStorage.getItem('cvData')
  const init = storeData ? JSON.parse(storeData) as ICv : initialCv
  const [cvData, setCvData] = useState<ICv>(init);

  useEffect(() =>{
    localStorage.setItem('cvData', JSON.stringify(cvData))
  }, [cvData])

  return (
    <CvContext.Provider value={{ cvData, setCvData }}>
      {props.children}
    </CvContext.Provider>
  );
}

export function useGlobalCv() {
  return useContext(CvContext) as ICvContext;
}

// basic react context:
//
// 1. CvContext = createContext()
// 2. <CvContext.Provider value={{name: 'Sahar' }}>
//       {...our app}
//    </CvContext.Provider>
// 3. const user = useContext(CvContext) // {name: 'Sahar'}

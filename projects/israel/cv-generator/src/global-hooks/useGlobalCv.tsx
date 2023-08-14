import { createContext, useState, useContext } from "react";

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
  linkedin: string;
  phone: string;
  summary: string;
  skills: string[];
  experienceList: IExpirience[];
}

export const initialCv: ICv = {
  name: "",
  title: "",
  email: "",
  linkedin: "",
  phone: "",
  summary: "",
  skills: [],
  experienceList: [],
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
  const [cvData, setCvData] = useState<ICv>(initialCv);

  return (
    <CvContext.Provider value={{ cvData, setCvData }}>
      {props.children}
    </CvContext.Provider>
  );
}

export function useGlobalCv() {
  return useContext(CvContext) as ICvContext;
}

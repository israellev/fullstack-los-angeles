import { useState,createContext,useContext } from "react";


export interface IExpirience {
    from: Date;
    to: Date;
    title: string;
    key_points: string[];
}

export interface ICv {
  name: string;
  title: string;
  email: string;
  linkedin: string;
  phone: string;
  summary: string;
  skills: string[];
  experience: IExpirience[];
}

export const initialCv: ICv = {
  name: "",
  title: "",
  email: "",
  linkedin: "",
  phone: "",
  summary: "",
  skills: [],
  experience: [],
}

export const initialExperience: IExpirience = {
    from: new Date(),
    to: new Date(),
    title: '',
    key_points: [],
  };

  type ICvContext = {
    cvData: ICv,
    setCvData: (cv: ICv) => void,
};

const CvContext = createContext<ICvContext | null > (null);

export function CvProvider (props: any){
    const [cvData,setCvData]=useState<ICv>(initialCv)

    return(
        <CvContext.Provider value = {{cvData:cvData , setCvData: setCvData}}>
            {props.children}
        </CvContext.Provider>
    )
}

export function useGlobalCv(){
    return useContext(CvContext) as ICvContext
}
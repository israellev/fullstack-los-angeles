import { useGlobalCv } from "../global-hooks/useGlobalCv";
import {Box} from "@mui/material";
import { Template1 } from "./cvTemplates/Template1";

interface Props {
  className?: string;
}


export const CvResult = (props: Props) => {

  const { cvData } = useGlobalCv();

  return (
    <Box className={props.className}>
      <Template1 cvData={cvData}/>
    </Box>
  );
};

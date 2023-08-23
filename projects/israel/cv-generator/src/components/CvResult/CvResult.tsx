import { useGlobalCv } from "../../global-hooks/useGlobalCv";
import { Box } from "@mui/material";
import { templateList } from "../CvDesign/SelectTemplate/SelectTemplate";
import { FloatRuler } from "./FloatRuler";

interface Props {
  templateIndex: number;
}

export const CvResult = (props: Props) => {
  const {templateIndex} = props;
  const { cvData } = useGlobalCv();

  const TemplateComponent = templateList[templateIndex].component
  return (
    <Box sx={{backgroundColor: "#f5f5f5"}}>
      <Box sx={{height: "88vh"}}>
      <TemplateComponent cvData={cvData}/>

      </Box>
      <FloatRuler/>
    </Box>
  );
};

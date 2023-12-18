import { useGlobalCv } from "../global-hooks/useGlobalCv";
import { Box } from "@mui/material";
import { templateList } from "./CvDesign/SelectTemplate/SelectTemplate";

interface Props {
  templateIndex: number;

}

export const CvResult = (props: Props) => {
  const {templateIndex} = props;
  const { cvData } = useGlobalCv();

  const TemplateComponent = templateList[templateIndex].component
  return (
    <Box>
      <TemplateComponent cvData={cvData}/>
    </Box>
  );
};

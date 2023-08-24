import { useGlobalCv } from "../global-hooks/useGlobalCv";
import { Box } from "@mui/material";
import { templateList } from "./SelectTemplate/SelectTemplate";

interface Props {
  className?: string;
  templateIndex: number;

}

export const CvResult = (props: Props) => {
  const {className, templateIndex} = props;
  const { cvData } = useGlobalCv();

  const TemplateComponent = templateList[templateIndex].component
  return (
    <Box className={className}>
      <TemplateComponent cvData={cvData}/>
    </Box>
  );
};

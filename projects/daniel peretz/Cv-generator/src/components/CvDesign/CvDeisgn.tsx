import { Box } from "@mui/material";
import { SelectTemplate } from "./SelectTemplate/SelectTemplate";
import { SelectColor } from "./SelectColor";

interface Props {
  templateIndex: number;
  setTemplateIndex: (templateIndex: number) => void;
}

export function CvDesign(props: Props) {
  const { templateIndex, setTemplateIndex } = props;
  return (
    <Box
      className="hide-scroll"
      sx={{
        height: "100vh",
        alignItems: "normal",
        boxShadow: "0 -2px 55px -13px rgba(0,0,0,.25)",
        overflow: "auto",
      }}
    >
      <SelectColor />
      <SelectTemplate
        templateIndex={templateIndex}
        setTemplateIndex={setTemplateIndex}
      />
    </Box>
  );
}

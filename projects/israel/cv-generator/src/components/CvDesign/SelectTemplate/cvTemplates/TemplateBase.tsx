import { Box, Card, CardContent, SxProps } from "@mui/material";
import { useGlobalCv } from "../../../../global-hooks/useGlobalCv";
import { FloatRuler } from "../../../CvResult/FloatRuler";
import { useRef } from "react";

interface Props {
  children: any;
  sx?: SxProps;
}

/* High order component */
export function TemplateBase(props: Props) {
  const { cvData } = useGlobalCv();
  const cvRef = useRef<HTMLElement>();

  return (
    <Box ref={cvRef}>
      <Card
        elevation={3}
        className="hide-scroll"
        sx={{
          p: 2,
          overflow: "auto",
          height: "100%",
          maxWidth: "800px",
          margin: "auto",
          marginTop: "20px",
          ...(props.sx || {}),
          ".MuiTypography-h1, .MuiTypography-h2, .MuiTypography-h3, .MuiTypography-h4, .MuiTypography-h5, .MuiTypography-h6, .MuiSvgIcon-root":
            {
              color: cvData.color,
            },
        }}
      >
        <FloatRuler cvRef={cvRef}/>
        <CardContent>{props.children}</CardContent>
      </Card>
    </Box>
  );
}

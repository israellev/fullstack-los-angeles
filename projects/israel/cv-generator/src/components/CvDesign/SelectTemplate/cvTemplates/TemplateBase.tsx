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
    <Card
      elevation={3}
      className="hide-scroll"
      sx={{
        marginTop: "20px",
        height: "100%",
        maxWidth: "800px",
        overflow: "auto",
        p: 2,
        ...(props.sx || {}),
        ".MuiTypography-h1, .MuiTypography-h2, .MuiTypography-h3, .MuiTypography-h4, .MuiTypography-h5, .MuiTypography-h6, .MuiSvgIcon-root":
          {
            color: cvData.color,
          },
      }}
    >
    <Box
      ref={cvRef}
      sx={{
      }}
    >
        <FloatRuler cvRef={cvRef} />
        <CardContent>{props.children}</CardContent>
    </Box>
      </Card>
  );
}

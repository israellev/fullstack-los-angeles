import { Card, CardContent, SxProps } from "@mui/material";
import { useGlobalCv } from "../../../../global-hooks/useGlobalCv";

interface Props {
  children: any;
  sx?: SxProps;
}

/* High order component */
export function TemplateBase(props: Props) {
  const {cvData} = useGlobalCv()
  return (
    <Card
      elevation={3}
      className="hide-scroll"
      sx={{
        overflow: "auto",
        height: "95vh",
        maxWidth: "800px",
        margin: "auto",
        marginTop: "20px",
        ...(props.sx || {}),
        ".MuiTypography-h1, .MuiTypography-h2, .MuiTypography-h3, .MuiTypography-h4, .MuiTypography-h5, .MuiTypography-h6, .MuiSvgIcon-root": {
          color: cvData.color,
        }
      }}
    >
      <CardContent>{props.children}</CardContent>
    </Card>
  );
}

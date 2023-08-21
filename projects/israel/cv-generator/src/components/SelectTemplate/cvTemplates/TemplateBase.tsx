import { Card, CardContent, SxProps } from "@mui/material";

interface Props {
  children: any;
  sx?: SxProps;
}

/* High order component */
export function TemplateBase(props: Props) {
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
      }}
    >
      <CardContent>{props.children}</CardContent>
    </Card>
  );
}

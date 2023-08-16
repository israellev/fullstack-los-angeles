import { useGlobalCv } from "../global-hooks/useGlobalCv";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Link,
  Button,
  Box,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

interface Props {
  className?: string;
}


export const CvResult = (props: Props) => {

  const { cvData: data } = useGlobalCv();
  console.log(data);

  function dateFormatting(inputDate: Date) {
    const year = inputDate.getFullYear();
    const month = String(inputDate.getMonth() + 1).padStart(2, "0");
    const day = String(inputDate.getDate()).padStart(2, "0");
    return `${year}/${month}/${day}`;
  }

  return (
    <Box
      // display="flex"
      // flexDirection="column"
      className={props.className}
    >
      <Card
        elevation={3}
        style={{ maxWidth: "800px", margin: "auto", marginTop: "20px" }}
        sx={{overflow: 'auto', height: "95vh"}}
      >
        <CardContent>
          {/* Header */}
          <Typography variant="h4" gutterBottom>
            {data.name}
          </Typography>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            {data.title}
          </Typography>

          {/* Contact Info */}
          <Grid container spacing={1} style={{ marginBottom: "20px" }}>
            <Grid item>
              <EmailIcon color="primary" />
              <Typography variant="body1" style={{ marginLeft: "10px" }}>
                {data.email}
              </Typography>
            </Grid>
            <Grid item>
              <PhoneIcon color="primary" />
              <Typography variant="body1" style={{ marginLeft: "10px" }}>
                {data.phone}
              </Typography>
            </Grid>
            <Grid item>
              <LinkedInIcon color="primary" />
              <Link
                href={data.linkedin}
                target="_blank"
                style={{ marginLeft: "10px" }}
              >
                LinkedIn
              </Link>
            </Grid>
          </Grid>

          {/* Summary */}
          <Typography variant="h6" gutterBottom>
            Summary
          </Typography>
          <Typography variant="body1" paragraph>
            {data.summary}
          </Typography>

          {/* Skills */}
          <Typography variant="h6" gutterBottom>
            Skills
          </Typography>
          <Grid container spacing={1}>
            {data.skills.map(
              (skill, idx) =>
                skill && (
                  <Grid key={idx} item>
                    <Button variant="outlined" color="primary">
                      {skill}
                    </Button>
                  </Grid>
                )
            )}
          </Grid>

          {/* Experiences */}
          <Typography variant="h6" gutterBottom style={{ marginTop: "20px" }}>
            Experience
          </Typography>
          {data.experienceList.map((exp, idx) => (
            <div key={idx} style={{ marginBottom: "20px" }}>
              <Typography variant="subtitle1">
                {exp.title} ({dateFormatting(exp.from)} - {dateFormatting(exp.to)})
              </Typography>
              <Typography variant="body1" paragraph>
                {exp.job_description}
              </Typography>
            </div>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
};

import { ICv } from "../../global-hooks/useGlobalCv";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Link,
  Button,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Utils } from "../../services/Utils";

export function Template1({ cvData }: { cvData: ICv }) {
  return (
    <Card
      elevation={3}
      className="hide-scroll"
      sx={{ overflow: "auto", height: "95vh",  maxWidth: "800px", margin: "auto", marginTop: "20px" }}
    >
      <CardContent>
        {/* Header */}
        <Typography variant="h4" gutterBottom>
          {cvData.name}
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          {cvData.title}
        </Typography>

        {/* Contact Info */}
        <Grid container spacing={1} sx={{ marginBottom: "20px" }}>
          <Grid item>
            <EmailIcon color="primary" />
            <Typography variant="body1" sx={{ marginLeft: "10px" }}>
              {cvData.email}
            </Typography>
          </Grid>
          <Grid item>
            <PhoneIcon color="primary" />
            <Typography variant="body1" sx={{ marginLeft: "10px" }}>
              {cvData.phone}
            </Typography>
          </Grid>
          <Grid item>
            <LinkedInIcon color="primary" />
            <Link
              href={cvData.linkedin}
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
          {cvData.summary}
        </Typography>

        {/* Skills */}
        <Typography variant="h6" gutterBottom>
          Skills
        </Typography>
        <Grid container spacing={1}>
          {cvData.skills.map(
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
        {cvData.experienceList.map((exp, idx) => (
          <div key={idx} style={{ marginBottom: "20px" }}>
            <Typography variant="subtitle1">
              {exp.title} ({Utils.dateFormatting(exp.from)} -{" "}
              {Utils.dateFormatting(exp.to)})
            </Typography>
            <Typography variant="body1" paragraph>
              {exp.job_description}
            </Typography>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

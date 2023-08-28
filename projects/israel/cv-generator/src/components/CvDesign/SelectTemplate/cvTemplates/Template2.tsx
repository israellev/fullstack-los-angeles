import { ICv } from "../../../../global-hooks/useGlobalCv";
import {
  Typography,
  Grid,
  Link,
  Button,
  Paper,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Utils } from "../../../../services/Utils";
import { TemplateBase } from "./TemplateBase";

export function Template2({ cvData }: { cvData: ICv }) {
  return (
    <TemplateBase>
      {/* Header */}
      <Paper elevation={2} sx={{ padding: "20px", marginBottom: "20px" }}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
          {cvData.name}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          {cvData.title}
        </Typography>
      </Paper>

      {/* Contact Info */}
      <Paper elevation={1} sx={{ padding: "10px", marginBottom: "20px", display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Grid container spacing={2}>
          <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
            <EmailIcon color="secondary" />
            <Typography variant="body2" sx={{ marginLeft: "8px" }}>
              {cvData.email}
            </Typography>
          </Grid>
          <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
            <PhoneIcon color="secondary" />
            <Typography variant="body2" sx={{ marginLeft: "8px" }}>
              {cvData.phone}
            </Typography>
          </Grid>
          <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
            <LinkedInIcon color="secondary" />
            <Link href={cvData.linkedin} target="_blank" sx={{ marginLeft: "8px", textDecoration: 'underline', color: 'textSecondary' }}>
              LinkedIn
            </Link>
          </Grid>
        </Grid>
      </Paper>

      {/* Summary */}
      <Typography variant="h5" gutterBottom sx={{ textDecoration: 'underline', marginBottom: '12px' }}>
        Summary
      </Typography>
      <Typography variant="body1" paragraph>
        {cvData.summary}
      </Typography>

      {/* Skills */}
      <Typography variant="h5" gutterBottom sx={{ textDecoration: 'underline', marginBottom: '12px' }}>
        Skills
      </Typography>
      <Grid container spacing={2}>
        {cvData.skills.map(
          (skill, idx) =>
            skill && (
              <Grid key={idx} item>
                <Button variant="contained" color="secondary" size="small">
                  {skill}
                </Button>
              </Grid>
            )
        )}
      </Grid>

      {/* Experiences */}
      <Typography variant="h5" gutterBottom sx={{ marginTop: "20px", textDecoration: 'underline', marginBottom: '12px' }}>
        Experience
      </Typography>
      {cvData.experienceList.map((exp, idx) => (
        <Paper key={idx} elevation={1} sx={{ padding: "10px", marginBottom: "20px" }}>
          <Typography variant="subtitle2" color="textSecondary">
            {exp.title} ({Utils.dateFormatting(exp.from)} -{" "}
            {Utils.dateFormatting(exp.to)})
          </Typography>
          <Typography variant="body2" paragraph>
            {exp.job_description}
          </Typography>
        </Paper>
      ))}
    </TemplateBase>
  );
}

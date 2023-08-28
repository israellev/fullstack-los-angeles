import { ICv } from "../../../../global-hooks/useGlobalCv";
import {
  Typography,
  Grid,
  Link,
  Button,
  Divider,
  Box,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Utils } from "../../../../services/Utils";
import { TemplateBase } from "./TemplateBase";

export function Template3({ cvData }: { cvData: ICv }) {
  return (
    <TemplateBase>
      {/* Header */}
      <Typography variant="h2" gutterBottom sx={{ fontWeight: '300', letterSpacing: '0.1em' }}>
        {cvData.name}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" gutterBottom sx={{ fontWeight: '500' }}>
        {cvData.title}
      </Typography>

      <Divider sx={{ marginY: '15px' }} />

      {/* Contact Info */}
      <Grid container spacing={2} alignItems="center">
        <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
          <EmailIcon fontSize="small" color="action" />
          <Typography variant="body2" sx={{ marginLeft: "8px", fontWeight: '400' }}>
            {cvData.email}
          </Typography>
        </Grid>
        <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
          <PhoneIcon fontSize="small" color="action" />
          <Typography variant="body2" sx={{ marginLeft: "8px", fontWeight: '400' }}>
            {cvData.phone}
          </Typography>
        </Grid>
        <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
          <LinkedInIcon fontSize="small" color="action" />
          <Link href={cvData.linkedin} target="_blank" sx={{ marginLeft: "8px", fontWeight: '400', textDecoration: 'none', color: 'action' }}>
            LinkedIn
          </Link>
        </Grid>
      </Grid>

      <Divider sx={{ marginY: '15px' }} />

      {/* Summary */}
      <Typography variant="h5" gutterBottom sx={{ letterSpacing: '0.05em', marginBottom: '10px' }}>
        Summary
      </Typography>
      <Typography variant="body1" paragraph sx={{ fontWeight: '300', lineHeight: 1.6 }}>
        {cvData.summary}
      </Typography>

      <Divider sx={{ marginY: '15px' }} />

      {/* Skills */}
      <Typography variant="h5" gutterBottom sx={{ letterSpacing: '0.05em', marginBottom: '10px' }}>
        Skills
      </Typography>
      <Grid container spacing={2}>
        {cvData.skills.map(
          (skill, idx) =>
            skill && (
              <Grid key={idx} item>
                <Button variant="text" color="primary">
                  {skill}
                </Button>
              </Grid>
            )
        )}
      </Grid>

      <Divider sx={{ marginY: '15px' }} />

      {/* Experiences */}
      <Typography variant="h5" gutterBottom sx={{ letterSpacing: '0.05em', marginBottom: '10px' }}>
        Experience
      </Typography>
      {cvData.experienceList.map((exp, idx) => (
        <Box key={idx} sx={{ marginBottom: "25px" }}>
          <Typography variant="h6" sx={{ fontWeight: '500' }}>
            {exp.title}
          </Typography>
          <Typography variant="caption" display="block" color="textSecondary" gutterBottom>
            {Utils.dateFormatting(exp.from)} - {Utils.dateFormatting(exp.to)}
          </Typography>
          <Typography variant="body2" paragraph sx={{ fontWeight: '300', lineHeight: 1.6 }}>
            {exp.job_description}
          </Typography>
        </Box>
      ))}
    </TemplateBase>
  );
}

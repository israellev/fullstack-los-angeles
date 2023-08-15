import { useGlobalCv } from "../global-hooks/useGlobalCv";
import {
  TextField,
  Button,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import { ExperienceForm } from "./ExperienceForm";
import { SkillsForm } from "./SkillsForm";

interface Props {
  className?: string;
}

export function CvForm(props: Props) {
  const { className } = props;
  const { cvData, setCvData } = useGlobalCv();

  return (
    <Box className={className}>
      <Grid
        container
        spacing={3}
        p={2}
        height="100vh"
        sx={{ overflow: "auto" }}
      >
        <Grid item xs={12} sm={12}>
          <Typography variant="h4" gutterBottom>
            CV Form
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            size="small"
            label="Name"
            fullWidth
            value={cvData.name}
            onChange={(e) => setCvData({ ...cvData, name: e.target.value })}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            size="small"
            label="Title"
            fullWidth
            value={cvData.title}
            onChange={(e) => setCvData({ ...cvData, title: e.target.value })}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            size="small"
            label="Email"
            fullWidth
            value={cvData.email}
            onChange={(e) => setCvData({ ...cvData, email: e.target.value })}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            size="small"
            label="LinkedIn"
            fullWidth
            value={cvData.linkedin}
            onChange={(e) => setCvData({ ...cvData, linkedin: e.target.value })}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            size="small"
            label="Phone"
            fullWidth
            value={cvData.phone}
            onChange={(e) => setCvData({ ...cvData, phone: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            size="small"
            label="Summary"
            type="text"
            multiline
            rows={5}
            fullWidth
            value={cvData.summary}
            onChange={(e) => setCvData({ ...cvData, summary: e.target.value })}
          />
        </Grid>

        <ExperienceForm />

        <SkillsForm />

        <Grid item xs={12}>
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

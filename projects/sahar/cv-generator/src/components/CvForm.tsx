import {
  initialExperience,
  useGlobalCv,
} from "../global-hooks/useGlobalCv";
import {
  TextField,
  Button,
  Typography,
  Grid,
  Paper,
  Box,
} from "@mui/material";
import { Experience } from "./Experience";

interface Props {
  className?: string;
}

export function CvForm(props: Props) {
  const { className } = props;
  const { cvData, setCvData } = useGlobalCv();

  const addExperience = () => {
    const updatedCv = { ...cvData };
    updatedCv.experience.push({ ...initialExperience });
    setCvData(updatedCv);
  };

  return (
    <Box maxWidth="md" className={className}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          CV Form
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Name"
              fullWidth
              value={cvData.name}
              onChange={(e) => setCvData({ ...cvData, name: e.target.value })}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Title"
              fullWidth
              value={cvData.title}
              onChange={(e) => setCvData({ ...cvData, title: e.target.value })}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              fullWidth
              value={cvData.email}
              onChange={(e) => setCvData({ ...cvData, email: e.target.value })}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="LinkedIn"
              fullWidth
              value={cvData.linkedin}
              onChange={(e) =>
                setCvData({ ...cvData, linkedin: e.target.value })
              }
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Phone"
              fullWidth
              value={cvData.phone}
              onChange={(e) => setCvData({ ...cvData, phone: e.target.value })}
            />
          </Grid>

          {/* Add more fields here for other details like title, email, linkedin, phone, etc. */}

          <Grid item xs={12}>
            <Typography variant="h6">Experience</Typography>
            {cvData.experience.map((experience, index) => (
              <Experience key={index} index={index} experience={experience} />
            ))}

            <Grid item xs={12}>
              <Button variant="outlined" onClick={addExperience}>
                Add Experience
              </Button>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

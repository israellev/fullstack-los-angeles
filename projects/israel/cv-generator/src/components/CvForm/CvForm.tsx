import { TextField, Button, Grid, Box, Card } from "@mui/material";
import { ExperienceForm } from "./ExperienceForm";
import { SkillsForm } from "./SkillsForm";
import { useGlobalCv } from "../../global-hooks/useGlobalCv";

export function CvForm() {
  const { cvData, setCvData } = useGlobalCv();

  return (
    <Box width="100%" sx={{
      ".MuiInputBase-input": {
        fontSize: "14px",
        borderRadius: "5px"
      }
    }}>
      <Card
        elevation={3}
        className="hide-scroll"
        style={{ maxWidth: "800px", margin: "auto"}}
        sx={{ overflow: "auto", pt: 3, height: "100vh", boxShadow: '0 -2px 55px -13px rgba(0,0,0,.25)' }}
      >
        <Grid
          container
          spacing={3}
          p={2}
        >
          {/* <Grid item xs={12} sm={12}>
            <Typography variant="h4" gutterBottom>
              CV Form
            </Typography>
          </Grid> */}

          <Grid item width="100%">
            <TextField
              size="small"
              placeholder="Name"
              fullWidth
              value={cvData.name}
              onChange={(e) => setCvData({ ...cvData, name: e.target.value })}
            />
          </Grid>

          <Grid item width="100%">
            <TextField
              size="small"
              placeholder="Title"
              fullWidth
              value={cvData.title}
              onChange={(e) => setCvData({ ...cvData, title: e.target.value })}
            />
          </Grid>

          <Grid item width="100%">
            <TextField
              size="small"
              placeholder="Email"
              fullWidth
              value={cvData.email}
              onChange={(e) => setCvData({ ...cvData, email: e.target.value })}
            />
          </Grid>

          <Grid item width="100%">
            <TextField
              size="small"
              placeholder="LinkedIn"
              fullWidth
              value={cvData.linkedin}
              onChange={(e) =>
                setCvData({ ...cvData, linkedin: e.target.value })
              }
            />
          </Grid>

          <Grid item width="100%">
            <TextField
              size="small"
              placeholder="Phone"
              fullWidth
              value={cvData.phone}
              onChange={(e) => setCvData({ ...cvData, phone: e.target.value })}
            />
          </Grid>
          <Grid item width="100%">
            <TextField
              size="small"
              placeholder="Summary"
              type="text"
              multiline
              rows={5}
              fullWidth
              value={cvData.summary}
              onChange={(e) =>
                setCvData({ ...cvData, summary: e.target.value })
              }
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
      </Card>
    </Box>
  );
}

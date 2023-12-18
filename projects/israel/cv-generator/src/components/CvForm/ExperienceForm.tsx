import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import {
  IExpirience,
  initialExperience,
  useGlobalCv,
} from "../../global-hooks/useGlobalCv";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export function ExperienceForm() {
  const { cvData, setCvData } = useGlobalCv();

  const [experience, setExperience] = useState<IExpirience>(
    cvData.experienceList[0]
  );
  const experienceIndex = cvData.experienceList.indexOf(experience);

  const addExperience = () => {
    const updatedCv = { ...cvData };
    updatedCv.experienceList.push({ ...initialExperience });
    setCvData(updatedCv);
    setExperience(
      updatedCv.experienceList[updatedCv.experienceList.length - 1]
    );
  };

  const handleExperienceChange = (field: keyof IExpirience, value: any) => {
    experience[field] = value;
    const updatedCv = { ...cvData };
    updatedCv.experienceList[experienceIndex] = experience;
    setCvData({ ...updatedCv });
  };

  return (
    <Box width="100%" paddingBottom={2} paddingLeft={3}>
      <Grid item>
        <Typography variant="h6" sx={{ marginBottom: 1 }}>
          Experience
        </Typography>

        <Box position="relative">
          <Grid item width="100%">
            <Button
            size="small"
            variant="outlined"
            fullWidth
            onClick={addExperience}
            sx={{ marginBottom: 1 }}
            >
              Add Experience
            </Button>
          </Grid>
          
          {experience && (
            <Select
            size="small"
            sx={{ width: "80%", marginLeft: "3px" }}
            value={experienceIndex.toString()}
            onChange={(e) => {
              const chosenExperience = cvData.experienceList.find(
                (experience, i) => i === +e.target.value
                );
                setExperience(chosenExperience as IExpirience);
              }}
              >
              {cvData.experienceList.map((_, index) => (
                <MenuItem key={index} value={index.toString()}>
                  Job {index + 1}
                </MenuItem>
              ))}
            </Select>
          )}

          {experience && (
            <IconButton
            onClick={() => {
              const updatedCv = { ...cvData };
              updatedCv.experienceList.splice(experienceIndex, 1);
              setCvData(updatedCv);
              setExperience(
                updatedCv.experienceList?.[
                  updatedCv.experienceList.length - 1
                ]
                );
              }}
              >
              <DeleteIcon />
            </IconButton>
          )}
        </Box>
      </Grid>

      {experience && (
        <Box display="flex" flexDirection="column" rowGap="15px">
          <Divider sx={{ my: 2 }} />
          <TextField
            placeholder="Title"
            size="small"
            fullWidth
            value={experience.title}
            onChange={(e) => handleExperienceChange("title", e.target.value)}
            />
          <Box display="flex" flexDirection="column" rowGap="15px">
            <TextField
              placeholder="From"
              size="small"
              type="month"
              value={experience.from}
              onChange={(e) => handleExperienceChange("from", e.target.value)}
              />
            <TextField
              placeholder="To"
              type="month"
              size="small"
              value={experience.to}
              onChange={(e) => handleExperienceChange("to", e.target.value)}
              />
          </Box>
          <TextField
            placeholder="Job Description"
            size="small"
            type="text"
            multiline
            rows={5}
            fullWidth
            value={experience.job_description}
            onChange={(e) =>
              handleExperienceChange("job_description", e.target.value)
            }
          />
        </Box>
      )}
    </Box>
  );
}

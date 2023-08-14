import { useState } from "react";
import { useGlobalCv } from "../global-hooks/useGlobalCv";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Button,
  Grid,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

export function SkillsForm() {
  const { cvData, setCvData } = useGlobalCv();
  const [skill, setSkill] = useState<string>("");
  const skillIndex = cvData.skills.indexOf(skill);

  const addSkill = () => {
    const updatedCv = { ...cvData };
    updatedCv.skills.push("");
    setCvData(updatedCv);
    setSkill(updatedCv.skills[updatedCv.skills.length - 1]);
  };

  return (
    <Box width="100%" p={3}>
      <Grid item xs={12} md={12}>
        <Typography variant="h6">Skills</Typography>

        <Box
          display="flex"
          flexDirection="row"
          columnGap="15px"
          position="relative"
        >
          {!cvData.skills.length && (
            <Button variant="outlined" onClick={() => addSkill()}>
              Add Skill
            </Button>
          )}

          {!!cvData.skills.length && (
            <>
              <Select
                size="small"
                value={skillIndex.toString()}
                onChange={(e) => {
                  const chosenSkill = cvData.skills.find(
                    (_, i) => i === +e.target.value
                  );
                  setSkill(chosenSkill as string);
                }}
              >
                {cvData.skills.map((skill, index) => (
                  <MenuItem key={index} value={index.toString()}>
                    {skill || "New Skill"}
                  </MenuItem>
                ))}
              </Select>

              <IconButton
                sx={{ position: "absolute", right: "40px" }}
                onClick={() => {
                  const updatedCv = { ...cvData };
                  updatedCv.skills.splice(skillIndex, 1);
                  setCvData(updatedCv);
                  setSkill(updatedCv.skills?.[updatedCv.skills.length - 1]);
                }}
              >
                <DeleteIcon />
              </IconButton>
            </>
          )}
        </Box>
        {!!cvData.skills.length && (
          <Box display="flex" flexDirection="column" width="100%" mt={1}>
            <TextField
              label="Skill"
              fullWidth
              value={skill}
              onKeyUp={(e) => {
                e.key === "Enter" && addSkill();
              }}
              onChange={(e) => {
                setSkill(e.target.value);
                const updatedSkills = [...cvData.skills];
                updatedSkills[skillIndex] = e.target.value;
                const updatedCv = { ...cvData, skills: updatedSkills };
                setCvData(updatedCv);
              }}
            />
          </Box>
        )}
      </Grid>
    </Box>
  );
}

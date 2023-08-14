import { Box, TextField } from '@mui/material';
import { IExpirience, useGlobalCv } from '../global-hooks/useGlobalCv';

interface Props {
    index: number,
    experience: IExpirience,
}

export function Experience(props: Props) {
    const {index, experience} = props;
    const {cvData, setCvData} = useGlobalCv();

    const handleExperienceChange = (index: number,  field: keyof IExpirience, value: any) => {
        const updatedCv = { ...cvData };
        updatedCv.experience[index][field] = value;
        setCvData(updatedCv);
      };

    return  <Box>
    <TextField
      label="From"
      type="date"
      value={experience.from}
      onChange={(e) =>
        handleExperienceChange(index, 'from', e.target.value)
      }
    />
    {/* Add more fields here for 'to', 'title', and 'key_points' */}
  </Box>
}
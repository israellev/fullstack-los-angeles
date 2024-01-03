import { Box, Typography } from "@mui/material";
import { CirclePicker, HuePicker, AlphaPicker, RGBColor } from "react-color";
import { useGlobalCv } from "../../global-hooks/useGlobalCv";

export function SelectColor() {
  const { cvData, setCvData } = useGlobalCv();

  const handleColorChange = (rgb: RGBColor, isOpcity?: boolean) => {
    const rgba = convertTextToObj(cvData.color)
    const newRgba = { ...rgb, a: isOpcity ? rgb.a || 1 : rgba.a }
    const rgbaText = `rgba(${newRgba.r},${newRgba.g},${newRgba.b},${newRgba.a})`
    setCvData({...cvData, color: rgbaText});
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="subtitle1" p={1}>
        Select Color
      </Typography>
      <CirclePicker
      width="100%"
      circleSize={20}
        color={cvData.color}
        onChangeComplete={(newColor) => handleColorChange(newColor.rgb)}
      />
      <Box sx={{ mt: 2 }}>
        <HuePicker
          width="100%"
          height="15px"
          color={cvData.color}
          onChangeComplete={(newColor) => handleColorChange(newColor.rgb)}
        />
      </Box>
      <Box sx={{ mt: 2 }}>
        <AlphaPicker
          width="100%"
          color={cvData.color}
          onChangeComplete={(newColor) => handleColorChange(newColor.rgb, true)}
        />
      </Box>
    </Box>
  );
}

const convertTextToObj = (color: string): RGBColor => {
    const regex = /rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/;
    const match = color.match(regex)!;
    return {
        r: parseInt(match[1], 10),
        g: parseInt(match[2], 10),
        b: parseInt(match[3], 10),
        a: parseFloat(match[4])
    };
  }
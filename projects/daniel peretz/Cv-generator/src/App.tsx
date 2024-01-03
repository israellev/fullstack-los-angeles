import "./App.css";
import { Box, CssBaseline } from "@mui/material";
import { CvResult } from "./components/CvResult/CvResult";
import { CvProvider } from "./global-hooks/useGlobalCv";
import { useState } from "react";
import { CvForm } from "./components/CvForm/CvForm";
import { CvDesign } from "./components/CvDesign/CvDeisgn";

function App() {
  const [templateIndex, setTemplateIndex] = useState(0);

  return (
    <>
      <CssBaseline />
      <CvProvider>
        <Box
          sx={{
            flexGrow: 1,
            flexBasis: 0,
            display: "flex",
            flexDirection: "row",
            ".MuiInputBase-input, .MuiTypography-root": {
              fontFamily: "'Montserrat', sans-serif",
              color: "#2d3748",
            },
            ".MuiInputBase-input, .MuiInputBase-root": {
              backgroundColor: "rgb(237,242,247)",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "transparent", // Hide border
              },
              "&:hover fieldset": {
                borderColor: "transparent", // Hide border on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "transparent", // Hide border when focused
              },
            },
          }}
        >
          <Box sx={{ width: "20vw", height: "100vh" }}>
            <CvForm />
          </Box>
          <Box sx={{ width: "60vw", height: "100vh", paddingX: 5, zIndex: 1 }}>
            <CvResult templateIndex={templateIndex} />
          </Box>
          <Box sx={{ width: "20vw", height: "100vh" }}>
            <CvDesign
              templateIndex={templateIndex}
              setTemplateIndex={setTemplateIndex}
            />
          </Box>
        </Box>
      </CvProvider>
    </>
  );
}

export default App;

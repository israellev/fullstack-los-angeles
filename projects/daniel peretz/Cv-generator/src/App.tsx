import "./App.css";
import { Box, CssBaseline } from "@mui/material";
import { CvResult } from "./components/CvResult";
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
            },
          }}
        >
          <Box sx={{ width: "25vw", height: "100vh" }}>
            <CvForm />
          </Box>
          <Box sx={{ width: "50vw", height: "100vh", paddingX: 2, zIndex: 1 }}>
            <CvResult templateIndex={templateIndex} />
          </Box>
          <Box sx={{ width: "25vw", height: "100vh" }}>
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

import "./App.css";
import { Box, CssBaseline } from "@mui/material";
import { CvResult } from "./components/CvResult";
import { CvProvider } from "./global-hooks/useGlobalCv";
import { useState } from "react";
import { CvForm } from "./components/CvForm/CvForm";
import { SelectTemplate } from "./components/SelectTemplate/SelectTemplate";

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
          }}
        >
          <Box sx={{ width: "25vw" }}>
            <CvForm className="page-style" />
          </Box>
          <Box sx={{ width: "50vw", paddingX: 2, zIndex: 1 }}>
            <CvResult className="page-style" templateIndex={templateIndex} />
          </Box>
          <Box sx={{ width: "25vw" }}>
            <SelectTemplate className="page-style" templateIndex={templateIndex} setTemplateIndex={setTemplateIndex} />
          </Box>
        </Box>
      </CvProvider>
    </>
  );
}

export default App;

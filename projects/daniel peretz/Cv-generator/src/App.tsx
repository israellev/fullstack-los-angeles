import "./App.css";
import { Box, CssBaseline } from "@mui/material";
import { CvForm } from "./components/CvForm";
import { CvResult } from "./components/CvResult";
import { CvProvider } from "./global-hooks/useGlobalCv";

function App() {
  return (
    <>
      <CssBaseline />
      <CvProvider>
        <Box display="flex" flexDirection="row">
          <CvResult className="page-style" />
          <CvForm className="page-style" />
        </Box>
      </CvProvider>
    </>
  );
}

export default App;

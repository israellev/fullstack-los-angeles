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
          <Box sx={{ ml: "15px", width: "48vw", p: 1 }}>
            <CvResult className="page-style" />
          </Box>
        </Box>
      </CvProvider>
    </>
  );
}

export default App;

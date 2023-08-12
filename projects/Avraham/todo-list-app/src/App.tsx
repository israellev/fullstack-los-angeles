
import "./App.css";
import { Box, CssBaseline } from "@mui/material";
import { CvResult } from "./components/CvResult";
import { CvForm } from "./components/CvForm";
import { CvProvider } from "./global-hooks/useGlobalTodos";



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

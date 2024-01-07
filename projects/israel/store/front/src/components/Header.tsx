import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { LoginButton } from "./LoginButton";
import { AddProductButton } from "./AddProductButton";

export function Header() {
  return (
    <AppBar position="static" sx={{ background: "darkslategrey" }}>
      <Toolbar>
        <Box display="flex" justifyContent="space-between" width="100%">
          <Typography variant="h6" component="div" alignSelf="center">
            Spices Store
          </Typography>
          <AddProductButton/>
          <LoginButton />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

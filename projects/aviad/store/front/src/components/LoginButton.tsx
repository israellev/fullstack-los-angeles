import { Box, Button } from "@mui/material";
import { useUser } from "../context/UserContext";


export function LoginButton() {
    const {user, login, logout} = useUser()    

  return (
    <Box>
      {user ? (
        <Box>
          {user.photoURL ? (
            <img
              onClick={() => logout()}
              src={user.photoURL}
              alt="user photo"
              style={{ borderRadius: "50%", height: "45px" }}
            />
          ) : (
            `Hello ${user.displayName}!`
          )}
        </Box>
      ) : (
        <Button variant="contained" onClick={() => login()}>
          Login With Google
        </Button>
      )}
    </Box>
  );
}

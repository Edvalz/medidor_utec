import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#FF5001" }}>
        <Toolbar sx={{ justifyContent: "center" }}>
          <Typography variant="h6" component="div">
            Termometro de conducta
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

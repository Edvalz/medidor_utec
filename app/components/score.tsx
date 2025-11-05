import { useState } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";

interface ScoreItemProps {
  id: number;
  group: string;
  value: number;
  color: string;
  onSave: (newValue: number) => void;
}

export default function ScoreBar({
  id,
  group,
  value,
  color,
  onSave,
}: ScoreItemProps) {
  const [inputValue, setInputValue] = useState<number>(0);
  const [points, setPoints] = useState<number>(value);

  const handleClick = () => {
    const updated = Math.min(points + inputValue, 100);
    setPoints(updated);
    onSave(updated);
  };

  return (
    <Box sx={{ mt: 7, display: "inline-block", width: "100%" }}>
      <Typography sx={{ color: "#5C6B7A" }}>{group}</Typography>
      <LinearProgress
        variant="determinate"
        value={points}
        sx={{
          height: 50,
          "& .MuiLinearProgress-bar": {
            backgroundColor: color,
          },
        }}
      />
      <Stack
        spacing={2}
        direction="row"
        sx={{ mt: 5, justifyContent: "center", alignItems: "center" }}
      >
        <TextField
          id="standard-basic"
          label="Puntos"
          type="number"
          variant="standard"
          sx={{
            mt: 4,
            input: { color: "#5C6B7A" },
            label: { color: "#5C6B7A" },
          }}
          onChange={(e) => setInputValue(Number(e.target.value))}
        />
        <Button variant="contained" onClick={handleClick}>
          Aceptar
        </Button>
      </Stack>
    </Box>
  );
}

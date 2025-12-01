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
  const MAX_POINTS = 10000;

  const [inputValue, setInputValue] = useState<number>(0);
  const [points, setPoints] = useState<number>(value);

  const percentage = Math.min((points / MAX_POINTS) * 100, 100);

  const handleClick = () => {
    const updated = Math.min(points + inputValue, MAX_POINTS);
    setPoints(updated);
    onSave(updated);
  };

  return (
    <Box sx={{ mt: 7, display: "inline-block", width: "100%" }}>
      <Typography sx={{ color: "#5C6B7A" }}>{group}</Typography>

      <LinearProgress
        variant="determinate"
        value={percentage}
        sx={{
          height: 50,
          borderRadius: 25,
          backgroundColor: "#f7cdb9ff",
          "& .MuiLinearProgress-bar": {
            backgroundColor: color,
          },
        }}
      />

      <Typography sx={{ mt: 1, color: "#5C6B7A", textAlign: "right" }}>
        {points} / {MAX_POINTS}
      </Typography>

      <Stack
        spacing={2}
        direction="row"
        sx={{ mt: 5, justifyContent: "center", alignItems: "center" }}
      >
        <TextField
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

        <Button
          variant="contained"
          onClick={handleClick}
          sx={{ backgroundColor: "#FF5001" }}
        >
          Aceptar
        </Button>
      </Stack>
    </Box>
  );
}

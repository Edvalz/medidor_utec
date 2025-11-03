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
  onSave: (newValue: number) => void; // 👈 callback que recibe el nuevo valor
}

export default function ScoreBar({ id, group, value, onSave }: ScoreItemProps) {
  const [inputValue, setInputValue] = useState<number>(0);
  const [points, setPoints] = useState<number>(value);

  const handleClick = () => {
    const updated = Math.min(points + inputValue, 100);
    setPoints(updated);
    onSave(updated); // 👈 notificamos al componente padre
  };

  return (
    <Box sx={{ mt: 7, display: "inline-block", width: "100%" }}>
      <Typography sx={{ color: "white" }}>{group}</Typography>
      <LinearProgress
        variant="determinate"
        value={points}
        sx={{ height: 50 }}
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
            input: { color: "white" },
            label: { color: "white" },
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

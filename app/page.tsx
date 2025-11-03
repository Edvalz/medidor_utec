"use client";

import ScoreBar from "./components/score";
import { Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { supabase } from "./components/supabaseClient";

interface Score {
  id: number;
  group_name: string;
  value: number;
}

export default function Home() {
  const [scores, setScores] = useState<Score[]>([]);

  useEffect(() => {
    const fetchScores = async () => {
      const { data, error } = await supabase
        .from("scores")
        .select("*")
        .order("id", { ascending: true }); // 👈 aquí ordenamos por id

      if (error) {
        console.error("Error al obtener datos:", error);
      } else {
        setScores(data);
      }
    };

    fetchScores();
  }, []);

  const handleSave = async (id: number, newValue: number) => {
    const { error } = await supabase
      .from("scores")
      .update({ value: newValue })
      .eq("id", id);

    if (error) {
      console.error("Error al actualizar:", error);
    } else {
      setScores(
        (prev) =>
          prev
            .map((s) => (s.id === id ? { ...s, value: newValue } : s))
            .sort((a, b) => a.id - b.id) // 👈 aseguramos el orden también en memoria
      );
    }
  };

  return (
    <Paper
      sx={{
        width: "70%",
        mx: "auto",
        p: 3,
        textAlign: "center",
        bgcolor: "inherit",
      }}
    >
      {scores.map((score) => (
        <ScoreBar
          key={score.id}
          id={score.id}
          group={score.group_name}
          value={score.value}
          onSave={(newVal) => handleSave(score.id, newVal)}
        />
      ))}
    </Paper>
  );
}

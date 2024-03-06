"use client";
import { Chip, Grid } from "@mui/material";
import React, { FC } from "react";
import { getPokemonInfo } from "../../../api/axios";
import { IPokemon } from "@/interface/pokemon";

interface IProps {
  pokemonsChip: IPokemon[];
  setPokemon: (state: any) => void;
}

const Chips: FC<IProps> = ({ pokemonsChip, setPokemon }) => {
  const handleClick = (name: string) => {
    getPokemonInfo(name).then((res) => {
      console.log(res);
      setPokemon(res);
    });
  };

  return (
    <Grid container gap={"8px"} maxWidth={"450px"}>
      {pokemonsChip.map((pok, index) => {
        return (
          <Grid item key={index}>
            <Chip
              label={pok.name}
              onClick={() => handleClick(pok.name)}
              sx={{
                color: "white",
                background: "#1986EC",
                fontSize: "20px",
                height: "60px",
                padding: "20px 10px",
                borderRadius: "44px",
                ":hover": {
                  background: "#4fa2ef",
                },
              }}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Chips;

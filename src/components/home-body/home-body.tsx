"use client";
import { Box, Grid } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import Chips from "../chips/chips";
import PokemonInfo from "../pokemon-info/pokemon-info";
import { getPokemonInfo } from "../../../api/axios";
import { IPokemon } from "@/interface/pokemon";

interface IProps {
  pokemons?: IPokemon[];
  firstpokemon?: any;
}

const HomeBody: FC<IProps> = ({ pokemons, firstpokemon }) => {
  const [pokemonInfo, setPokemonInfo] = useState(firstpokemon);

  return (
    <Grid marginTop={"54px"} container justifyContent="space-between">
      <Grid item>
        <Chips pokemonsChip={pokemons!} setPokemon={setPokemonInfo} />
      </Grid>

      <Grid item>
        <PokemonInfo pokemonInfo={pokemonInfo} />
      </Grid>
    </Grid>
  );
};

export default HomeBody;

import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { FC } from "react";

interface IProps {
  pokemonInfo?: any;
}

const PokemonInfo: FC<IProps> = ({ pokemonInfo }) => {
  return (
    <Grid
      container
      sx={{ background: "black", padding: "44px", color: "#A0A0A0" }}
      maxWidth={"484px"}
      maxHeight={"500px"}
    >
      <Grid item>
        <Typography variant="h3" marginBottom={"40px"}>
          {pokemonInfo?.name?.length > 0
            ? pokemonInfo?.name[0]?.toUpperCase() + pokemonInfo?.name.slice(1)
            : "Select pokemon..."}
        </Typography>
      </Grid>
      <Grid container justifyContent="center">
        {pokemonInfo?.sprites?.front_default ? (
          <Image
            src={pokemonInfo?.sprites?.other?.dream_world?.front_default}
            alt="Pokemon img"
            width={175}
            height={175}
          />
        ) : (
          ""
        )}
      </Grid>
      <Grid item marginTop={"40px"}>
        <Typography>Снялся в {pokemonInfo?.moves?.length} сериях</Typography>
        <Typography fontSize={"17px"}>id: {pokemonInfo?.id}</Typography>
        <Typography fontSize={"17px"}>height: {pokemonInfo?.height}</Typography>
        <Typography fontSize={"17px"}>
          attack: {pokemonInfo?.stats[1]?.base_stat}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default PokemonInfo;

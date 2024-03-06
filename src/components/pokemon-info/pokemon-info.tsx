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
    >
      <Grid item>
        <Typography variant="h3">
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
            width={300}
            height={300}
          />
        ) : (
          ""
        )}
      </Grid>
      <Grid item>
        {/* <Typography>Снялся в {pokemonInfo} сериях</Typography> */}
        <Typography>id: {pokemonInfo?.id}</Typography>
        <Typography>height: {pokemonInfo?.height}</Typography>
        {/* <Typography>attack: {pokemonInfo?.stats[1]?.base_stat}</Typography> */}
      </Grid>
    </Grid>
  );
};

export default PokemonInfo;

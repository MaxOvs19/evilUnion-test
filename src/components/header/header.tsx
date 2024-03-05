import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { FC } from "react";

const Header: FC = () => {
  return (
    <Box component="header" paddingTop={"100px"}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item height={"27px"}>
          <Typography textTransform="uppercase">Покемоны API</Typography>
        </Grid>
        <Grid item>
          <Grid container alignItems="center" gap={"10px"}>
            <Image
              src="/images/touch.svg"
              width={30}
              height={30}
              alt="Picture of the author"
            />
            <Typography variant="h2" fontSize={"12px"} width="105px">
              Нажмите на нужного Покемона
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;

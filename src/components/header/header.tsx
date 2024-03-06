import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { FC } from "react";

const Header: FC = () => {
  return (
    <Box component="header" paddingTop={"100px"}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item border={"1px solid white"} padding={"6.5px"}>
          <Typography
            textTransform="uppercase"
            fontSize={"12px"}
            lineHeight={1}
          >
            Покемоны API
          </Typography>
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

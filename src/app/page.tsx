import styles from "./page.module.css";
import { Container } from "@mui/material";
import Header from "@/components/header/header";
import HomeBody from "@/components/home-body/home-body";
import { getPokemons } from "../../api/axios";

export default async function Home() {
  const pokemons = await getPokemons();

  return (
    <main className={styles.main}>
      <Container>
        <Header />
        <HomeBody pokemons={pokemons?.results} />
      </Container>
    </main>
  );
}

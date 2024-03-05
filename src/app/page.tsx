import Image from "next/image";
import styles from "./page.module.css";
import { Container } from "@mui/material";
import Header from "@/components/header/header";

export default function Home() {
  return (
    <main className={styles.main}>
      <Container>
        <Header />
      </Container>
    </main>
  );
}

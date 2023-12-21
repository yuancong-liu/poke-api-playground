import { RandomPokemon } from "@/components/pages/top/RandomPokemon";

import styles from "./page.module.scss";

export const metadata = {
  title: "PokéAPI Playground",
  description: "Welcome to the PokéAPI Playground!",
};

const Home = () => {
  return (
    <main className={styles["page-wrapper"]}>
      <RandomPokemon />
    </main>
  );
};

export default Home;

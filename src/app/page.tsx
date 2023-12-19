import { RandomPokemon } from "@/components/pages/RandomPokemon";
import styles from "./page.module.scss";

const Home = () => {
  return (
    <main className={styles["page-wrapper"]}>
      <RandomPokemon />
    </main>
  );
};

export default Home;

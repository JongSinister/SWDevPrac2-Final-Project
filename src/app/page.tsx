import styles from "./page.module.css";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
    </main>
  );
}

import styles from "./page.module.css";
import Header from "@/component/Layout/Header";
import MainContent from "@/component/Home/MainContent";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <MainContent />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}

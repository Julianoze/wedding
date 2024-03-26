import data from "@/data.json";
import styles from "./page.module.css";

import Content from "@/models/Content";
import Card from "@/components/card/card";

export default function Home() {
  return (
    <main className={styles.main}>
      {data.map((x : Content, i : number)=> {
        return <Card
          key={x.emojiCode}
          content={x}
        />
      })}
    </main>
  );
}

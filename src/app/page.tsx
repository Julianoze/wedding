import data from "@/data.json";
import styles from "./page.module.css";

import Content from "@/models/Content";
import Card from "@/components/card/card";
import Title from "@/components/title/title";

export default function Home() {
  const Grid = () => {
    let element = new Array<JSX.Element>();

    Array
    .from(Array(27), (_, i) => i+1)
    .forEach((i) => {
      element.push(
        <div className={styles.column}>
          <img src={`/grid/${i}.jpeg`} />
        </div>
      );
    });

    return (
      <div className={styles.grid}>
        {element}
      </div>
    );
  };

  const PageCard = ({ text } : { text : string }) => {
    return (
      <Card
      content={{
        description: text
      }}
      />
    )
  }

  return (
    <main className={styles.main}>
      {data.map((x : Content, i : number)=> {
        return (
            <Card
              key={i}
              content={x}
            />
        )
      })}

      <PageCard
        text="Paz e amor é o que eu quero pra nós, e que nada nesse mundo cale a nossa voz" />
      <Title
        emojiCode="127909"
        text="De frente com JuZé"
      />
      <p>Vídeo</p>

      <PageCard
        text="Borboletas sempre voltam e o seu jardim sou eu..." />
      <Title
        emojiCode="129482"
        text="Memórias congeladas"
      />

      <Grid />
      <PageCard
        text="A medida de amar é amar sem medida " />

    </main>
  );
}

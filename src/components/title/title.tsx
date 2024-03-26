import styles from "./title.module.css";

type Props = {
    text : string | undefined;
    emojiCode : string | undefined
}

function Title(props : Props) {
    if(!props.text)
        return <></>;

   const Emoji = () => {
       const emojiCode = props.emojiCode;

       if(!emojiCode)
           return <></>;

       return <h1>{String.fromCodePoint(parseInt(emojiCode))}</h1>;
   }

    return (
       <div className={styles.title}>
           <Emoji />
           <h1>{props.text}</h1>
       </div>
    )
}

export default Title;
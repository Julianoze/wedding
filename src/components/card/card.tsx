import Content from "@/models/Content";
import styles from "./card.module.css";
import Image from "next/image";
import Title from "../title/title";

type Props = {
    content : Content
}

function Card(props : Props) {
    const hasTitle = () => props.content.title;

    const Content = () => {
        if(hasTitle())
            return (
                <div className={`${styles.content} ${props.content.alignPhotoRight ? styles.reverse : '' }`}>
                    <Photo />
                    <div className={styles.column}>
                        <p className={styles.description}>{props.content.description}</p>
                    </div>
                </div>
        );

        return (
            <div className={styles['content-citation']}>
                <Image
                    alt="Quebra de linha"
                    width={100}
                    height={24}
                    src="/up.png"
                />
                <p className={styles.description}>
                    {props.content.description}
                </p>
                <Image
                    alt="Quebra de linha"
                    width={100}
                    height={24}
                    src="/down.png"
                />
            </div>
        )
    }
    const Photo = () => {
        const photo = props.content.photo;
        if(!photo)
            return <></>;

        return (
            <div className={styles.column}>
                <div className={styles[`photo${props.content.alignPhotoRight ? "-reverse" : ''}`]}>
                    <div className={styles['photo-area']}>
                        <img
                            alt="foto"
                            src={`/cropped/${photo.fileName}`}
                        />
                    </div>
                    <PhotoDescription
                        description={photo.description}
                    />
                </div>
            </div>
        )
    }

    const PhotoDescription = ({ description } : { description : string | undefined}) => {
        if(!description)
            return <></>;

        try {
            return <p>{String.fromCodePoint(parseInt(description))}</p>
        } catch {
            return <p>{description}</p>
        }
    }

    return (
        <div className={styles[`card${hasTitle() ? '' : '-citation'}`]}>
            <Title
                text={props.content.title}
                emojiCode={props.content.emojiCode}
            />
            <Content />
        </div>
    );
}

export default Card;
type Photo = {
    fileName: string,
    description: string
}

type Content = {
    emojiCode?: string,
    title? : string,
    description: string,
    alignPhotoRight?: boolean
    photo?: Photo,
}

export default Content;
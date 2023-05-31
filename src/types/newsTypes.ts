
type CardType = {
  titleCard: string,
  img: string
}

export type ContentType = {
  text: string[],
  card: CardType
}
export type NewsType = {
  title: string,
  content: ContentType
}

export type ToolCardType = {
  id: number
  titleCard: string,
  textCard: string,
  icon: string
}

export type ToolsType = {
  title: string,
  content: ToolCardType[]
}

type LogoContentType = {
  logoImg: string,
  logoName: string
}

type LogoType = {
  light: LogoContentType,
  dark: LogoContentType
}

export type SectionType = {
  id: number,
  title: string,
  href: string,
}

export type NavbarType = {
  logo: LogoType,
  nav: SectionType[]
}
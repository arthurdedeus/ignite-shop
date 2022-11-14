import type { AppProps } from 'next/app'
import Image from 'next/image'

import { Container, globalStyles, Header } from '@/styles'
import logoImg from '@/assets/logo.svg'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}

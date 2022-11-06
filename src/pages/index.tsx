import { styled } from '@/styles'

const Button = styled('button', {
  backgroundColor: '$green300',
  borderRadius: 4,
})

export default function Home() {
  return <Button>Hello World!</Button>
}

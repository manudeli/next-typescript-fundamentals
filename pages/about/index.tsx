import styled from '@emotion/styled'
import Link from 'next/link'

interface Props {}

const About = (props: Props) => {
  return (
    <div>
      About
      <Box />
      <Link href="/">Go to home</Link>
    </div>
  )
}

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
`

export default About

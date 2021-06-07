import { motion, useCycle } from 'framer-motion'
import { useRef } from 'react'
import { useDimensions } from './hooks/use-dimentions'
import styled from 'styled-components'

const Nav = styled(motion.nav)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
`

const App = () => {
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)
  const [isOpen, toggleOpen] = useCycle(false, true)

  return (
    <Nav initial={false} custom={height} ref={containerRef}>
      nav {height}
    </Nav>
  )
}

export default App

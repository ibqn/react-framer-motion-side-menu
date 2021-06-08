import { motion, useCycle } from 'framer-motion'
import { useRef } from 'react'
import { useDimensions } from './hooks/use-dimentions'
import styled from 'styled-components'
import MenuToggle from './components/menu-toggle'
import Navigation from './components/navigation'

const Nav = styled(motion.nav)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
`

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

const Background = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  background: #fff;
`

const App = () => {
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)
  const [isOpen, toggleOpen] = useCycle(false, true)

  return (
    <Nav
      initial={'closed'}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      <Background variants={sidebar} />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </Nav>
  )
}

export default App

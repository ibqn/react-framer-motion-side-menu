import { motion } from 'framer-motion'
import styled from 'styled-components'

import MenuItem from './menu-item'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF']

const Ul = styled(motion.ul)`
  margin: 0;
  padding: 0;

  padding: 25px;
  position: absolute;
  top: 100px;
  width: 230px;
`

const Navigation = () => {
  return (
    <Ul variants={variants}>
      {colors.map((color, index) => (
        <MenuItem color={color} key={index} />
      ))}
    </Ul>
  )
}

export default Navigation

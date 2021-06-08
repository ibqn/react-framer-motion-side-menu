import PropTypes from 'prop-types'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Li = styled(motion.li)`
  margin: 0;
  padding: 0;

  list-style: none;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
`

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const Placeholder = styled.div`
  border: ${(props) => `2px solid ${props.color}`};
`

const IconPlaceholder = styled(Placeholder)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex: 40px 0;
  margin-right: 20px;
`

const TextPlaceholder = styled(Placeholder)`
  border-radius: 5px;
  width: 200px;
  height: 20px;
  flex: 1;
`

const MenuItem = ({ color }) => {
  return (
    <Li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <IconPlaceholder color={color} />
      <TextPlaceholder color={color} />
    </Li>
  )
}

MenuItem.propTypes = {
  color: PropTypes.string.isRequired,
}

export default MenuItem

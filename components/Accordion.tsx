import { PropsWithChildren, useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa'

import Box from './Box'
import Flex from './Flex'
import Text from './Text'

const Wrapper = styled(Flex)`
  cursor: pointer;
  width: 100%;
  text-align: left;
  overflow: hidden;
`

const Panel = styled(Box)`
  background-color: white;
  overflow: hidden;
  transition: height 0.2s ease-out;
`

type Props = PropsWithChildren<{
  title: string
}>

const Accordion = ({ children, title }: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
 
  
  return (
    <Box borderColor="border" borderStyle="solid" borderWidth="1px" borderLeft="none" borderRight="none" borderBottom="none" width="100%">
      <Wrapper onClick={handleClick} p="sm" pl="0" fontWeight="bold" justifyContent="space-between">
        <Text color="gray_900">{title}</Text>
        <Box fontSize="sm" ml="sm">
          {isOpen ? <FaMinusCircle color="#ccc" /> : <FaPlusCircle color="#ccc" />}
        </Box>
      </Wrapper>
      <Panel ref={ref} height={isOpen && ref.current ? ref.current.scrollHeight : 0} fontSize="sm">
        <Box pb="sm">
          {children}
        </Box>
      </Panel>
    </Box>
  )
}

export default Accordion
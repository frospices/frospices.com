import { PropsWithChildren } from 'react'
import { FaTimes } from 'react-icons/fa'

import Box from "./Box";
import IconButton from './IconButton'

type Props = PropsWithChildren<{
  isOpen?: boolean;
  onClose: () => void
}>

const Overlay = ({ children, isOpen, onClose }: Props) => (
  <Box height={isOpen ? "100%": "0"} width="100%" position="fixed" zIndex="2" top="0" left="0" backgroundColor="black" style={{ transition: "0.5s", overflowX: "hidden" }} >
   <Box position="absolute" top="20px" right="40px" color="white">
      <IconButton onClick={onClose}>
        <FaTimes size="30px" />
      </IconButton>
    </Box>
    <Box position="relative" top="25%" width="100%" textAlign="center" mt="lg" onClick={onClose}>
      {children}
     </Box>
   </Box>
)

export default Overlay
import theme from '../styles/theme'
import { ReactHOC } from '../types/hoc'

import { ChakraProvider } from '@chakra-ui/react'

const withChakraUI: ReactHOC = (Component) => (props) => (
    <ChakraProvider theme={theme}>
        <Component {...props} />
    </ChakraProvider>
)

export default withChakraUI
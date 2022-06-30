import React, { Children } from 'react'
import styled from 'styled-components'

const Container = ({children}) => {
  return (
    <StyledDiv>
      {children}
    </StyledDiv>
  )
}

export default Container
const StyledDiv = styled.div`
max-width: 1800px;
`
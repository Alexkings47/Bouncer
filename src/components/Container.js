import React from 'react'
import styled from 'styled-components'
import PropTypes from "prop-types";


const Container = ({children}) => {
  return (
    <StyledDiv>
      {children}
    </StyledDiv>
  )
}

Container.propTypes = {
  children : PropTypes.node
}
export default Container
const StyledDiv = styled.div`
max-width: 1800px                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ;
`
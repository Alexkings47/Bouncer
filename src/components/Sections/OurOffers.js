import React from 'react'
import styled from 'styled-components'
import OffersItem from '../OffersItem'

const OurOffers = () => {
  return (
    <StyledDiv className='partial-width'>
        <OffersItem  imgUrl={"shipping.png"} title={"FREE SHIPPING"} />
        <OffersItem  imgUrl={"refund.png"} title={"100% REFUND"}   />
        <OffersItem  imgUrl={"support.png"} title={"SUPPORT"}   />
    </StyledDiv>
  )
}

export default OurOffers
const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;
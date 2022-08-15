import React from 'react'
import styled from 'styled-components'


const HeaderImg = ({image}) => {
    return (
        <ImgContainer>
            <ImgCard src={image} alt="" />
        </ImgContainer>
    )
}

const ImgContainer = styled.div`
  min-width: 100%;
  width: 100%;
  overflow: hidden;
`

export const ImgCard = styled.img`
    width: 100%;
`
export default HeaderImg
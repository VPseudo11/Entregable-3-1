import React from 'react'
import styled from 'styled-components'

const Location = ({ location }) => {
    return (
        <LocationContainer>
            <TitleContainer>
                <TitleWorld>{location.name}</TitleWorld>
            </TitleContainer>
            <DetailsContainer>
                <DetailsItem>
                    <label>Type: </label>
                    <label>{location.type}</label>
                </DetailsItem>
                <DetailsItem>
                    <label>Dimension: </label>
                    <label>{location.dimension}</label>
                </DetailsItem>
                <DetailsItem>
                    <label>Population: </label>
                    <label>{location.residents.length}</label>
                </DetailsItem>
            </DetailsContainer>
        </LocationContainer>

    )
}

const LocationContainer = styled.article`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: var(--color-13);
`

const TitleContainer = styled.div`
    width: 100%;
    margin-top: 15px;
`

const TitleWorld = styled.h1`
    text-align: center;
    margin: 0;
    font-size: 2.1rem;
    font-weight: 700;
    color: var(--color-14);
`

const DetailsContainer = styled.div`
    width: 100%;
    display: grid;
    grid-row-gap: 0;
    grid-column-gap: 15px;
    row-gap: 0;
    column-gap: 15px;
    flex: 1 1;
    grid-template-columns: repeat(auto-fit, minmax(250px, auto));;
    margin: 15px 0;
`
//grid-template-columns: repeat(auto-fit, minmax(250px, auto));
export const DetailsItem = styled.div`
    display: flex;
    height: 30px;
    align-items: center;
    justify-content: center;
    color: var(--color-14);
    padding: 0 30px;
`

export default Location
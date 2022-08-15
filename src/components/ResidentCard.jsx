import React from 'react'
import useFetch from '../hooks/useFetch'
import { CardContainer, CircleStatus, DetailsContainer, DetailsItem, ImgCard, ImgContainer, NameCharacter, StatusDiv, StatusInfo } from '../styles/CardStyles'

const ResidentCard = ({ url }) => {
    const id = url.split('/')
    let character = useFetch(`https://rickandmortyapi.com/api/character/${id[id.length - 1]}`)
    return (
        <CardContainer>
            <ImgContainer>
                <ImgCard src={character?.image} alt="" />
                <StatusDiv >
                    <CircleStatus status={character?.status}></CircleStatus>
                    <StatusInfo>{character?.status}</StatusInfo>
                </StatusDiv>
            </ImgContainer>
            <NameCharacter>{character?.name}</NameCharacter>
            <DetailsContainer>
                <DetailsItem>
                    <label>Source</label>
                    <label>{character?.origin.name}</label>
                </DetailsItem>
                <DetailsItem>
                    <label>Episodes</label>
                    <label>{character?.episode.length}</label>
                </DetailsItem>
                <DetailsItem>
                    <label>Species</label>
                    <label>{character?.species}</label>
                </DetailsItem>
                <DetailsItem>
                    <label>Type</label>
                    <label>{character?.type}</label>
                </DetailsItem>
                <DetailsItem>
                    <label>Gender</label>
                    <label>{character?.gender}</label>
                </DetailsItem>
            </DetailsContainer>
        </CardContainer>
    )
}

export default ResidentCard
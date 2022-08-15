import styled from 'styled-components'

export const CardContainer = styled.article`
    width: 300px;
    height: 550px;
    display: flex;
    flex-direction: column;
    background-color: var(--color-13);
    box-shadow: 6px 6px 6px 3px rgba(0, 0, 0, 0.3);
`

export const ImgContainer = styled.div`
    max-width: 100%;
    overflow: hidden;
    position: relative;
`

export const ImgCard = styled.img`
    width: 100%;
    vertical-align: top;
`

export const StatusDiv = styled.div`
    position: absolute;
    top: 15px;
    display: flex;
    align-items: center;
    width: 80px;
    height: 21px;
    background: var(--color-3);
    border-radius: 0 10px 10px 0;
`

export const CircleStatus = styled.div`
    margin: 0 5px;
    background: ${props => props.status === "Dead" ? '#9d544a' : props.status === "Alive" ? '#2F9331' : '#b5c1c3'};
    width: 12px;
    height: 12px;
    border-radius: 50%;
`
export const StatusInfo = styled.p`
    color: white;
    margin: 0;
    font-size: 15px;
    font-weight: 500;
`

export const NameCharacter = styled.h1`
    text-align: center;
    color: var(--color-14);
    margin: 0;
    font-size: 1.8rem;
    font-weight: 600;
`

export const DetailsContainer = styled.div`
    display: grid;
    grid-row-gap: 0;
    grid-column-gap: 15px;
    row-gap: 0;
    column-gap: 15px;
    flex: 1 1;
    grid-template-columns: auto;
    padding: 5px 15px;
`

export const DetailsItem = styled.div`
    display: flex;
    height: 30px;
    justify-content: space-between;
    align-items: center;
    color: var(--color-14);
`

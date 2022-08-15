import axios from 'axios'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import CardSection from './components/CardSection'
import HeaderImg from './components/HeaderImg'
import Location from './components/Location'
import Search from './components/Search'

import img1 from '/assets/rickmorty1.jpg'
import img2 from '/assets/rickmorty2.jpg'
import img3 from '/assets/rickmorty3.jpg'
import img4 from '/assets/rickmorty4.jpg'
import img5 from '/assets/rickmorty5.jpg'
import img6 from '/assets/rickmorty6.jpg'

function App() {
  const [location, setLocation] = useState(null)
  const [numberLocation, setNumberLocation] = useState(Math.floor(Math.random() * (126 - 1) + 1))
  const [residents, setResidents] = useState([])

  const images = [img1, img2, img3, img4, img5, img6]
  const image = images[Math.floor(Math.random() * 6)]

  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/location/${numberLocation}`
    axios.get(URL)
      .then(res => {
        setLocation(res.data)
        setResidents(res.data.residents)
      })
      .catch(err => console.log(err))
  }, [numberLocation])

  const handleOnChange = (searchData) => {
    if (searchData.value === '') {
      setNumberLocation(Math.floor(Math.random() * (126 - 1) + 1))
    } else {
      setNumberLocation(searchData.value)
    }
  }

  return (
    <AppContainer>
      <HeaderContainer>
        <HeaderImg image={image} />
        <Search onSearchChange={handleOnChange} />
      </HeaderContainer>
      <LocationSection>
        {location && <Location location={location} />}
      </LocationSection>
      {residents && <CardSection residents={residents} />}
    </AppContainer>
  )
}
const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1200px;
  margin: 30px auto;
  background: rgb(31, 44, 63);
`

const HeaderContainer = styled.div`
  min-width: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
`

const LocationSection = styled.section`
  width: 100%;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px 0;
`



export default App

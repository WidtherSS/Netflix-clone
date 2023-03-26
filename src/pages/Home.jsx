import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from "../Request"

const Home = () => {
  return (
    <div>
        <Main/>
        <Row rowId='1' title="Up Coming" fetchURL={requests.requestUpcoming}/>
        <Row rowId='2' title="Popular" fetchURL={requests.requestPopular}/>
        <Row rowId='3' title="Latest" fetchURL={requests.requestLatest}/>
        <Row rowId='4' title="Top Rated" fetchURL={requests.requestToprated}/>
        <Row rowId='5' title="Similar" fetchURL={requests.requestSimilar}/>
    </div>
  )
}

export default Home
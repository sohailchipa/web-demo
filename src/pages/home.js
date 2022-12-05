import React, { useEffect, useState } from 'react'
import WebLayout from '../layout';
import axios from 'axios';
import { ListGroup } from 'react-bootstrap';

const Home = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    await axios.get(`${process.env.REACT_APP_API_KEY}product.json`).then((response) => {
      console.log('REACT_APP_API_KEY', response)
      setData(response?.data)
    }).catch((error) => {
      console.log('error', error)
    })
  }

  useEffect(() => {
    getData()
  }, [])

  console.log('data', data)

  return (
    <>
      <WebLayout>
        <ListGroup>
        {data && data.map((item,index)=>{
          console.log('index',index)
          return(
            <ListGroup.Item  key={`data${index}`}>{index+1}{item?.name}</ListGroup.Item>
          )
        })}   
        </ListGroup>
      </WebLayout>
    </>
  )
}

export default Home;
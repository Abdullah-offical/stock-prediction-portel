import {useEffect, useState} from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Dashboard = () => {
  const accessToken = localStorage.getItem('accessToken')
  useEffect(() => {
    const fatchProtectedData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/protected-view/', {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        }) 
        console.log('Protected data:', response.data)
      }catch (error) {
        console.error("Error finding" ,error)
      }
    }
    fatchProtectedData();
  }, [])
  return (
    <>
        <h1 className='text-light'>Hello, world</h1>
    </>
  )
}

export default Dashboard
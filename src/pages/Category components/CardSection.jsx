import React from 'react'
import Card from './Card'
import {Link} from 'react-router-dom'

const CardSection = () => {
  return (
    <div className='w-full px-[15vw] py-[10vh] bg-webBlue flex flex-wrap text-white justify-between gap-10'>

    <Link to="/playerpage"> <Card /> </Link>
    <Link to="/playerpage"> <Card /> </Link>
    <Link to="/playerpage"> <Card /> </Link>
    <Link to="/playerpage"> <Card /> </Link>
    <Link to="/playerpage"> <Card /> </Link>
    <Link to="/playerpage"> <Card /> </Link>
    <Link to="/playerpage"> <Card /> </Link>
    <Link to="/playerpage"> <Card /> </Link>
    <Link to="/playerpage"> <Card /> </Link>

    </div>
  )
}

export default CardSection
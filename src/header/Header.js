import React from 'react'
import './header.css'
import { Head } from './Head'
import { Navbar } from './Navbar'
import { Search } from './Search'

export const Header = () => {
  return (
    <>
    <Head/>
    <Search />
    <Navbar />
    </>
  )
}

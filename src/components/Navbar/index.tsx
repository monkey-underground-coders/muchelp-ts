import React from 'react'

import "./index.scss"

import { Layout } from "antd"
const { Header } = Layout


interface NavbarProps {
    
}

const Navbar = (props: NavbarProps) =>  {
    return (
        <Header>
            <span className="Navbar__span" >MUC-help</span>
        </Header>
    )
}

export default Navbar

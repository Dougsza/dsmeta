import React from 'react'
import logo from '../../assets/logo.svg'
import './style.css'

export default function Header() {
  return (
    <header>
        <div className="dsmeta-logo-container">
            <img src={logo} alt="DSMeta" />
            <h1>DSMeta</h1>
            <p>
            Desenvolvido por <a href="https://www.instagram.com/dougsouz">@dougsouz</a>
            </p>
        </div>
    </header>   
  )
}

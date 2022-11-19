import { useState } from 'react'
import Button from './Button'
import './Navbar.css'
import {useNavigate} from 'react-router-dom'

const Header  = () => {

  let navigate = useNavigate();

  const [page, setPage] = useState(window.location.href.split('/').slice(-1)[0])

  const newPage = (page) => {
    //window.history.pushState('','', '/'+page)
    setPage(page)
    navigate(page);
    
  }

  
  return (
    <ul className='Navbar'>
        <li className='Logo'> JS </li>
      <div className='Items'>
        <li><Button text={'Home'} onClick = {() => newPage('Home')} color = { page === 'Home' ? 'red' :''}/></li>
        <li><Button text={'About me'} onClick = {() => newPage('About%20me')} color = { page === 'About%20me' ? 'red' :''}/></li>
        <li><Button text={'Projects'} onClick = {() => newPage('Projects')} color = { page === 'Projects' ? 'red' :''}/></li>
        <li><Button text={'Contact'} onClick = {() => newPage('Contact')} color = { page === 'Contact' ? 'red' :''}/></li>
        <li><Button text={'CV'} onClick = {() => newPage('CV')} color = { page === 'CV' ? 'red' :''}/></li>
      </div>    
    </ul>
  )

}



export default Header

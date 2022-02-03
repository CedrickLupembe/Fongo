import React from 'react';
import styled from 'styled-components'
import Nav from './sections/Links'

const Navbar = () => {
  return <Navigation>

        <h1>Logo</h1>
        <ul>
            {Nav.map(link => {
                return  <li  key={link.id}><a href={link.link}>{link.name}</a></li>
            })}
        </ul>
        

  </Navigation>
}



const Navigation = styled.nav`
    
    width: auto;
    height: 12vh;
    background-color: tomato;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 100px;

    ul{
        list-style: none;
        display: flex;
        
        a{
            padding: 0 30px;
            text-decoration: none;
            color: white;
        }
    }

`

export default Navbar;

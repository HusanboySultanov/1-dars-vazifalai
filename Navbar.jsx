import React from 'react'
import { Container, NavItems, Title, Item } from './style';

export const Navbar = () => {
  return (
    <div>
      <Container>
        <Title>WebCode</Title>
        <NavItems>
           <Item rang={'qizil'}>Home</Item>
           <Item>Contact</Item>
           <Item>Mowies</Item>
           <Item>Discount</Item>
           <Item rang={'sariq'}>0</Item>
        </NavItems>
      </Container>
         
    
    </div>
  )
}
export default Navbar;  

import React from 'react';
import {Button} from '../Button';
import logo from '../../assets/logo-dio.png';
import {
    BuscarInputContainer,
    Container,
    Menu,
    MenuRight,
    Row,
    Wrapper

} from './styles';


const Header = () => {
  return (
    <Wrapper>
        <Container>
            <Row>
            <img src={logo} alt="Logo da dio"/>
            <BuscarInputContainer>
                <input placeholder='Buscar...'/>
            </BuscarInputContainer>
            <Menu>Live Code</Menu>
            <Menu>Global</Menu>
            </Row>
            <Row>
            <MenuRight href="#">Home</MenuRight>
            <Button title ="Entrar"></Button>
            <Button title ="Cadastrar"></Button>
            </Row>
        </Container>
    </Wrapper>
  )
}

export {Header}
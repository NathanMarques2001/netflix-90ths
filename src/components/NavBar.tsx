import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ComponentMeta } from '@storybook/react';
import {
  AppBar,
  TextInput,
  Toolbar,
  Avatar,
  Button,
  MenuListItem,
  Separator,
  MenuList,
} from 'react95';

import logoIMG from '../assets/logo.svg';
import Arrow from '../assets/arrow.png';
import { Navbar } from '../styles/component-styles';
import Photo from '../assets/photo.png';

export default {
  title: 'Environment/AppBar',
  component: AppBar,
  decorators: [(story) => <Navbar>{story()}</Navbar>],
} as ComponentMeta<typeof AppBar>;

export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar>
        <AppBar>
          <Toolbar style={{ justifyContent: 'space-between' }}>
            <div className="logo-list">
              <img
                src={logoIMG}
                alt="netflix logo"
                style={{ height: '60px' }}
              />
              <div className="list-nav" style={{ width: '30%' }}>
                <p className="Inicio-p">Inicio</p>
                <p>Series</p>
                <p>Filmes</p>
                <p className="Bombando-p">Bombando</p>
                <p>Minha lista</p>
              </div>
            </div>
            <div className="input-button" style={{ width: '30%' }}>
              <TextInput
                placeholder="Titulos e generos..."
                style={{ minWidth: '120px' }}
              />
              <div className="avatar-button" style={{ width: '30%' }}>
                <Avatar square size={'60%'}>
                  <img
                    src={Photo}
                    alt="photo"
                    width={'100%'}
                    className="avatar"
                  />
                </Avatar>
                <Button
                  variant="thin"
                  onClick={() => setOpen(!open)}
                  size="sm"
                  active={open}
                  className="menu-button"
                >
                  <img src={Arrow} alt="arrow" width={16} />
                </Button>
                {open && (
                  <MenuList
                    style={{
                      position: 'absolute',
                      right: '0',
                      top: '100%',
                      zIndex: '9999',
                    }}
                    onClick={() => setOpen(false)}
                  >
                    <MenuListItem size="sm">Adicionar perfil</MenuListItem>
                    <Separator />
                    <MenuListItem size="sm">Gerenciar perfis</MenuListItem>
                    <MenuListItem size="sm">Transferir perfil</MenuListItem>
                    <MenuListItem size="sm">Conta</MenuListItem>
                    <MenuListItem size="sm">Central de ajuda</MenuListItem>
                    <Separator />
                    <MenuListItem size="sm">
                      <Link to="/netflix-90ths">Sair da Netflix</Link>
                    </MenuListItem>
                  </MenuList>
                )}
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </Navbar>
    </>
  );
}

NavBar.story = {
  name: 'NavBar',
};

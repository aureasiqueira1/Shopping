import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { FaHome } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { MdLogin } from "react-icons/md";

import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { FavoriteStatus, GroupIcon, HeaderSection, Name } from './styles';
import CartButton from '../Cart/CartButton/CartButton';

function Header() {
  const { user } = useAuth();
  const { signout } = useAuth();
  const navigate = useNavigate();
  const { favoriteItems } = useContext(AppContext);

  return (
    <HeaderSection>
      <div className="container">

        <Link to="/home" className="icon">
          <FaHome />
          <Name>Home</Name>
        </Link>

        <SearchBar />

        <GroupIcon>
          <Link className="icon">
            <CartButton />
          </Link>

          {!!user && (
            <Link to="/favorites" className="favoritos">
              <MdFavorite />
              {favoriteItems.length > 0 && <FavoriteStatus>{favoriteItems.length}</FavoriteStatus>}
              <Name>Favoritos</Name>
            </Link>
          )}

          {!!user ? (
            <Link className="icon">
              <MdLogout className="logout" onClick={() => [signout(), navigate("/")]} />
              <Name onClick={() => [signout(), navigate("/")]} >Sair</Name>
            </Link>
          )
            : (
              <Link to="/signin" className="icon">
                <MdLogin />
                <Name>Entrar</Name>
              </Link>
            )
          }

        </GroupIcon>
      </div>
    </HeaderSection>
  );
}

export default Header;

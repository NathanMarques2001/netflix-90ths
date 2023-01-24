import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: 'ms_sans_serif';

  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 2%;
  }

  p {
    font-size: 1.5rem;
  }
  img {
    width: 105%;
  }
`

export const LoadingBar = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  div{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

`

export const Navbar = styled.div`
  font-family: 'ms_sans_serif';

  div{
    display: flex;
    align-items: center;
    gap: 15%;
    justify-content: space-around;
  }

  p:hover{
    cursor: pointer;
  }

  p{
    padding: 4px;
  }

  @media(max-width: 760px) {
    .Bombando-p,
    .Inicio-p{
      display: none;
    }
    .logo-list{
      flex-direction: column;
    }
    .list-nav{
      justify-content: space-around;
    }
    .input-button{
      flex-direction: column;
      margin-right: 5%;
    }
    .menu-button{
      margin-top: 40%;
    }
  }

`
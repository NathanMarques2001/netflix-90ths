import styled from 'styled-components';

export const UserCardContainer = styled.div`
  font-family: 'ms_sans_serif';
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  width: 100%;

  h1{
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 2%;
  }

  div{
    display: flex;
    gap: 5%;
  }
  @media(max-width: 790px) {
    div{
      flex-direction: column;
    }
  }
`;

import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: #dedede90;
  `
  
export const Chat = styled.div `
position: absolute;
// display: flex;
// flex-direction: column;
top: 5rem;
height: 100vh;
width: 100%;
background-color: white;
padding: 3rem;
border-radius: 25px 5px 25px 5px;
box-shadow: 0px 5px 17px -7px rgba(0, 0, 0, 0.75); 
z-index: 30;
animation: slide-down 300ms ease-out forwards;
`
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-style: normal;
        font-weight: normal; 
    }
    
    body{
        background:#333;
    }

    a{
        text-decoration: none;
    }

    .Modal {
    width: 597px;
    height:262px;
    background: #333;
    border-radius:50px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    outline:none;
    h1{
      font-family: 'Lato', sans-serif;
      color:white;
      font-size:34px;
      width:400px;
      text-align:center;
    }
  }

  .Overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display:flex;
    justify-content:center;
    align-items:center;
    background: rgba(255, 255, 255, 0.9);
  }

  .tooltip{
    background-color:rgb(255, 255, 255) !important;
    font-family: 'Lato', sans-serif !important;
    font-weight:700 !important;
    color: black !important;
    opacity: 0.8 !important;
    border-radius: 5px !important;
  }
  /* .modal-content{
    top:"10%";
    margin: "0 auto";
    background-color: "#333";
    width:"90%";
    height:"85%";
    opacity: "1";
    border-radius: "10px"; 
    color: 'white';
  }
  .modal-overlay{
    background-color: "rgba(255, 255, 255, 0.9)";
    display: "flex";
  } */

`

// font-family: 'Lato', sans-serif;
// font-family: 'Oswald', sans-serif;
// font-family: 'Passion One', cursive;
import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'

function MyApp  () {return (
  <h2>Olá, mundossss!</h2>
)} 
 
const anotherEelement = <h1>Olá, mundo!</h1>

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//     class: "link",
//   },
//   children: "Click me to visit google",
// }

const reactElement = React.createElement('a',{href: 'https://google.com', target: '_blank', className: "link"}, "Click me to visit google")

ReactDom.createRoot(document.getElementById('root')).render(
  
    <App />
)

import React from 'react'
// import './Footer.css'
export const Footer = () => {
  let footerStyle = {
    position: "sticky",
    top: "100vh",
    width: "100%",
    border: "5px solid #73AD21"

  }
  return (
    <footer className="bg-dark text-light" style=
      {footerStyle}>
      <p className="text-center py-3">
        Copyright &copy; MyTodosList.com
      </p>
    </footer>
  )
}

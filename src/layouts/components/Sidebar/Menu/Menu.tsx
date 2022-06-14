import React from 'react'

interface PropTypes {
    children?: React.ReactNode;
}

const Menu: React.FC<PropTypes> = ({ children }) => {
  return (
   <nav>
    {children}
   </nav>
  )
}

export default Menu
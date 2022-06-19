import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren<unknown>{ }

const Menu = ({ children } : Props): JSX.Element => {
  return (
   <nav>
    {children}
   </nav>
  )
}

export default Menu
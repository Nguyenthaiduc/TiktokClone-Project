import React,{FC} from 'react'
import './GlobalStyles.scss'

interface PropTypes {
    children?: React.ReactNode
}

const GlobalStyles : FC<PropTypes> = ({ children }) => {
    return(
        <>
        {children}
        </>
    )

};

export default GlobalStyles;

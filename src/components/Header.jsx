import { useState } from 'react';



function Header(){
    return(
        <header className='header'>
            <img src="./src/assets/images/troll-face.png" alt="" className='header-image' />
            <h1 className='header-title'>Meme Generator App</h1>
            <h4 className='header-project'>React-Course Project</h4>
        </header>
    )
}



export default Header
import React from 'react'
import BigButtonBox from '../Components/BigButtonBox';
import FirstButtonBox from '../Components/FirstButtonBox'
import GridButtonBox from '../Components/GridButtonBox';
import './ButtonPage.scss';


function ButtonPage() {
    return (
        <div className='buttonPage'>
            <FirstButtonBox />
            <GridButtonBox />
            <BigButtonBox />
        </div>
    )
}

export default ButtonPage

import React from 'react'
import "./FirstButtonBox.scss"


function FirstButtonBox() {
    return (
        <div className='firstButtonBox'>
            <h1 className="firstButtonBox__title">
                Buttons
            </h1>
            <ul className="firstButtonBox__list">
                <li className="firstButtonBox__el">
                    <p className="firstButtonBox__txt">
                        {"<Button />"}
                    </p>
                    <button className="firstButtonBox__btn">
                        Default
                    </button>
                </li>
                <li className="firstButtonBox__el">
                    <p className="firstButtonBox__txt firstButtonBox__txt--hover">
                    &:hover, &:focus
                    </p>
                    <button className="firstButtonBox__btn firstButtonBox__btn--hover">
                        Default
                    </button>
                </li>
                <li className="firstButtonBox__el">
                    <p className="firstButtonBox__txt">
                    {"<Button variant=”outline” />"}
                    </p>
                    <button className="firstButtonBox__btn firstButtonBox__btnOutline">
                        Default
                    </button>
                </li>
                <li className="firstButtonBox__el">
                    <p className="firstButtonBox__txt firstButtonBox__txt--hover" >
                    &:hover, &:focus
                    </p>
                    <button className="firstButtonBox__btn firstButtonBox__btnOutline firstButtonBox__btnOutline--hover">
                        Default
                    </button>
                </li>
                <li className="firstButtonBox__el">
                    <p className="firstButtonBox__txt">
                        {"<Button variant=”text” />"}
                    </p>
                    <button className="firstButtonBox__btn firstButtonBox__btnTxt" type='text'> 
                        Default
                    </button>
                </li>
                <li className="firstButtonBox__el">
                    <p className="firstButtonBox__txt firstButtonBox__txt--hover">
                    &:hover, &:focus
                    </p>
                    <button className="firstButtonBox__btn firstButtonBox__btnTxt--hover">
                        Default
                    </button>
                </li>
            </ul>

        </div>
    )
}

export default FirstButtonBox

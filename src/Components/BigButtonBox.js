import React from 'react';
import './BigButtonBox.scss';


function BigButtonBox() {
    return (
        <div className='bigButton'>
            <ul className="bigButton__list">
                <li className="bigButton__el">
                    <p className="firstButtonBox__txt">
                        {"<Button color=”default” />"}
                    </p>
                    <button className="firstButtonBox__btn ">
                        Default
                    </button>
                </li>
                <li className="bigButton__el">
                    <p className="firstButtonBox__txt">
                        {"&:hover, &:focus"}
                    </p>
                    <button className="firstButtonBox__btn firstButtonBox__btn--hover">
                        Default
                    </button>
                </li>
                <li className="bigButton__el">
                    <p className="firstButtonBox__txt">
                        {"<Button color=”primary” />"}
                    </p>
                    <button className=" bigButton__pry">
                        Default
                    </button>
                </li>
                <li className="bigButton__el">
                    <p className="firstButtonBox__txt">
                        {"&:hover, &:focus"}
                    </p>
                    <button className=" bigButton__pry bigButton__pry--hov">
                        Default
                    </button>
                </li>
                <li className="bigButton__el">
                    <p className="firstButtonBox__txt">
                        {"<Button color=”secondary” />"}
                    </p>
                    <button className="bigButton__sec ">
                        Secondary
                    </button>
                </li>
                <li className="bigButton__el">
                    <p className="firstButtonBox__txt">
                        {"&:hover, &:focus"}
                    </p>
                    <button className="bigButton__sec bigButton__sec--hover">
                        Secondary
                    </button>
                </li>
                <li className="bigButton__el">
                    <p className="firstButtonBox__txt">
                        {"<Button color=”danger” />"}
                    </p>
                    <button className="bigButton__dan ">
                        Danger
                    </button>
                </li>
                <li className="bigButton__el">
                    <p className="firstButtonBox__txt">
                        {"&:hover, &:focus"}
                    </p>
                    <button className="bigButton__dan bigButton__dan--hover ">
                        Danger
                    </button>
                </li>

            </ul>
        </div>
    )
}

export default BigButtonBox

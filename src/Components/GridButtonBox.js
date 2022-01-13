import React from 'react'
import './GridButtonBox.scss';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function GridButtonBox() {
    return (
        <div className='gridButtonBox'>
            <ul className="gridButtonBox__list">
                <li className="gridButtonBox__el">
                    <p className="firstButtonBox__txt">
                        {"<Button disableShadow />"}
                    </p>
                    <button className="firstButtonBox__btn gridButtonBox__disShadow">
                        Default
                    </button>
                </li>
                <li className="gridButtonBox__el">
                    <p className="firstButtonBox__txt">
                        {"<Button disabled />"}
                    </p>
                    <button className="firstButtonBox__btn gridButtonBox__disabled" disabled>
                        Default
                    </button>
                </li>
                <li className="gridButtonBox__el">
                    <p className="firstButtonBox__txt">
                        {"<Button variant=”text” disabled />"}
                    </p>
                    <button className="firstButtonBox__btn   gridButtonBox__disabled--textD" disabled>
                        Default
                    </button>
                </li>
            </ul>

            <ul className="gridBtnIcon__list">
                <li className="gridBtnIcon__el">
                    <p className="firstButtonBox__txt">
                        {"<Button startIcon=”local_grocery_store” />"}
                    </p>
                    <button className="gridBtnIcon__btn">
                        <AddShoppingCartIcon className='gridBtnIcon__icon' style={{ fontSize: 14 }} />
                        Default
                    </button>
                </li>
                <li className="gridBtnIcon__el">
                    <p className="firstButtonBox__txt">
                        {"<Button endIcon=”local_grocery_store” />"}
                    </p>

                    <button className="gridBtnIcon__btn">

                        Default
                        <AddShoppingCartIcon className='gridBtnIcon__icon gridBtnIcon__icon--reverse' style={{ fontSize: 14 }} />
                    </button>
                </li>
            </ul>

            <ul className="listBtnSize__list">
                <li className="listBtnSize__el">
                    <p className="firstButtonBox__txt">
                        {"<Button size=”sm” />"}
                    </p>
                    <button className="listBtnSize__btn" disabled>
                        Default
                    </button>
                </li>
                <li className="listBtnSize__el">
                    <p className="firstButtonBox__txt">
                        {"<Button size=”md” />"}
                    </p>
                    <button className="listBtnSize__btn listBtnSize__btn--md" disabled>
                        Default
                    </button>
                </li>
                <li className="listBtnSize__el">
                    <p className="firstButtonBox__txt">
                        {"<Button size=”lg” />"}
                    </p>
                    <button className="listBtnSize__btn listBtnSize__btn--lg" disabled>
                        Default
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default GridButtonBox;

import React from 'react'
import './InputRow1.scss';
import './InputGrid.scss';
import './InputIcon.scss';

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LockIcon from '@mui/icons-material/Lock';


function InputRow1() {
    return (
        <div>
            <h1 className="firstButtonBox__title">
                Input
            </h1>

            <ul className="inputRow__list">
                <li className="inputRow__el">
                    <p className="firstButtonBox__txt">
                        {"<Input /> "}
                    </p>
                    <label htmlFor="" className="inputRow__label">
                        Label
                    </label>
                    <input type="text" name="" id="" placeholder='Placeholder' className="inputRow__input" />

                </li>
                <li className="inputRow__el">
                    <p className="firstButtonBox__txt inputRow__txtH">
                        {" &:hover"}
                    </p>
                    <label htmlFor="" className="inputRow__label">
                        Label
                    </label>
                    <input type="text" name="" id="" placeholder='Placeholder' className="inputRow__input inputRow__input--hover1" />

                </li>
                <li className="inputRow__el">
                    <p className="firstButtonBox__txt inputRow__txtH">
                        {"&:focus "}
                    </p>
                    <label htmlFor="" className="inputRow__label inputRow__label--bleu">
                        Label
                    </label>
                    <input type="text" name="" id="" placeholder='Placeholder' className="inputRow__input inputRow__input--focus1" />

                </li>
                <li className="inputRow__el">
                    <p className="firstButtonBox__txt">
                        {" <Input error />"}
                    </p>
                    <label htmlFor="" className="inputRow__label inputRow__label--error">
                        Label
                    </label>
                    <input type="text" name="" id="" placeholder='Placeholder' className="inputRow__input inputRow__input--error" />

                </li>
                <li className="inputRow__el">
                    <p className="firstButtonBox__txt inputRow__txtH">
                        {" &:hover"}
                    </p>
                    <label htmlFor="" className="inputRow__label">
                        Label
                    </label>
                    <input type="text" name="" id="" placeholder='Placeholder' className="inputRow__input " />

                </li>
                <li className="inputRow__el">
                    <p className="firstButtonBox__txt inputRow__txtH">
                        {"&:focus "}
                    </p>
                    <label htmlFor="" className="inputRow__label inputRow__label--error">
                        Label
                    </label>
                    <input type="text" name="" id="" placeholder='Placeholder' className="inputRow__input inputRow__input--error" />

                </li>
            </ul>


            <ul className="inputGrid__list">
                <li className="inputRow__el inputGrid__el b1">
                    <p className="firstButtonBox__txt">
                        {" <Input disabled />"}
                    </p>
                    <label htmlFor="" className="inputRow__label ">
                        Label
                    </label>
                    <input type="text" name="" id="" placeholder='Placeholder' className="inputRow__input inputRow__input--disabled" />

                </li>
                <li className="inputRow__el inputGrid__el b2">
                    <p className="firstButtonBox__txt inputRow__txtH">
                        {" <Input helperText=”Some interesting text” />"}
                    </p>
                    <label htmlFor="" className="inputRow__label">
                        Label
                    </label>
                    <input type="text" name="" id="" placeholder='Placeholder' className="inputRow__input " />
                    <p className="inputGrid__txt">
                        Some interesting text
                    </p>

                </li>
                <li className="inputRow__el inputGrid__el b3">
                    <p className="firstButtonBox__txt inputRow__txtH">
                        {"<Input helperText=”Some interesting text” error />"}
                    </p>
                    <label htmlFor="" className="inputRow__label inputGrid__label--error">
                        Label
                    </label>
                    <input type="text" name="" id="" placeholder='Placeholder' className="inputRow__input inputGrid__input--error" />
                    <p className="inputGrid__txt inputGrid__txt--error">
                        Some interesting text
                    </p>
                </li>
            </ul>


            <ul className="inputIcon__list">

                <li className="inputRow__el inputIcon__el">
                    <p className="firstButtonBox__txt">
                        {"<Input startIcon /> "}
                    </p>
                    <label htmlFor="" className="inputRow__label ">
                        Label
                    </label>
                    <div className="inputIcon__box">
                        <LocalPhoneIcon className="inputIcon__icon" />
                        <input type="text" name="" id="" placeholder='Placeholder' className="inputRow__input inputIcon__input" />
                    </div>


                </li>
                <li className="inputRow__el inputIcon__el">
                    <p className="firstButtonBox__txt">
                        {"<Input endIcon /> "}
                    </p>
                    <label htmlFor="" className="inputRow__label ">
                        Label
                    </label>
                    <div className="inputIcon__box">

                        <input type="text" name="" id="" placeholder='Placeholder' className="inputRow__input inputIcon__input" />
                        <LockIcon className="inputIcon__icon inputIcon__icon--end" />
                    </div>


                </li>
                <li className="inputRow__el inputIcon__el">
                    <p className="firstButtonBox__txt">
                        {"<Input value=”text” /> "}
                    </p>
                    <label htmlFor="" className="inputRow__label ">
                        Label
                    </label>
                    <input type="text" name="" id="" value="Text" placeholder='Placeholder' className="inputRow__input inputIcon__input--txt" />
                </li>
            </ul>


            <ul className="inputSize">
                <li className="inputSize__el ">
                    <p className="firstButtonBox__txt">
                        {"<Input size=”sm” /> "}
                    </p>
                    <label htmlFor="" className="inputRow__label inputSize__label">
                        Label
                    </label>
                    <input type="text" name="" id="" placeholder='Placeholder' className="inputRow__input inputSize__input" />
                </li>
                <li className="inputSize__el ">
                    <p className="firstButtonBox__txt">
                        {"<Input size=”md” /> "}
                    </p>
                    <label htmlFor="" className="inputRow__label inputSize__label">
                        Label
                    </label>
                    <input type="text" name="" id="" placeholder='Placeholder' className="inputRow__input inputSize__input--md" />
                </li>
            </ul>

            <div className="inputSize__full ">
                <p className="firstButtonBox__txt inputSize__txt">
                    {"<Input fullWidth /> "}
                </p>
                <label htmlFor="" className="inputRow__label inputSize__label">
                    Label
                </label>
                <input type="text" name="" id="" placeholder='Placeholder' className="inputRow__input inputSize__input--full" />
            </div>


            <div className="inputText ">
                <p className="firstButtonBox__txt inputSize__txt">
                    {"<Input multiline row=”4” />"}
                </p>
                <label htmlFor="" className="inputRow__label ">
                    Label
                </label>
                <textarea rows="4"  placeholder='Placeholder' className="inputText__textarea" />
            </div>
        </div>
    )
}

export default InputRow1

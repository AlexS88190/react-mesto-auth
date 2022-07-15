import React from 'react';

function InfoTooltip({ loggedIn,  dataMessage}) {

    // const [dataMessage, setDataMessage] = React.useState(
    //     {
    //       //  popupMessage: null,
    //       //  picture: null,
    //         messageSuccess: 'Вы успешно зарегистрировались!',
    //         messageError: 'Что-то пошло не так! Попробуйте еще раз.'
    //     }
    // );

    const { popupMessage, messageSuccess, messageError } = dataMessage;


    return (
        <div className={`infotooltip ${popupMessage !== null && "infotooltip_opened"}`}>
            <div className="infotooltip__container">
                <button className="infotooltip__close-button" type="button" aria-label="закрыть"/>
                <div className={`infotooltip__report ${loggedIn ? 'infotooltip__report_successful' : 'infotooltip__report_error'}`}/>
                <div className="infotooltip__title">{loggedIn ? messageSuccess : messageError}</div>
            </div>
        </div>
    )
}

export default InfoTooltip

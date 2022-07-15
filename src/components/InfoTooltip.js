import React from 'react';

function InfoTooltip({ dataMessage, closeInfoTooltip }) {

    const { popupMessage, pictureAlert, messageSuccess, messageError } = dataMessage;

    return (
        <div className={`infotooltip ${popupMessage !== null && "infotooltip_opened"}`}>
            <div className="infotooltip__container">
                <button className="infotooltip__close-button" type="button" onClick={closeInfoTooltip} aria-label="закрыть"/>
                <div className={`infotooltip__report ${pictureAlert ? 'infotooltip__report_successful' : 'infotooltip__report_error'}`}/>
                <div className="infotooltip__title">{pictureAlert ? messageSuccess : messageError}</div>
            </div>
        </div>
    )
}

export default InfoTooltip

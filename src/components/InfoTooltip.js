import React from 'react';

function InfoTooltip() {
    return (
        <div className="infotooltip">
            <div className="infotooltip__container">
                <button className="infotooltip__close-button" type="button" aria-label="закрыть"/>
                <div className="infotooltip__report infotooltip__report_successful"/>
                <div className="infotooltip__title">Вы успешно зарегистрировались!</div>
            </div>
        </div>
    )
}

export default InfoTooltip

import React from "react";

function PopupWithForm({name, title, isOpen, onClose, buttonTitleSubmit, children, onSubmit}) {

    return (
        <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
            <div className="popup__container">
                <button className="popup__close-button popup__close-button_profile" type="button"
                        aria-label="закрыть" onClick={onClose}/>
                <h2 className="popup__title">{title}</h2>
                <form className={`popup__form popup__form_${name}`} name={name} onSubmit={onSubmit}>
                    {children}
                    <button className="popup__save-button" type="submit">{buttonTitleSubmit}</button>
                </form>
            </div>
        </div>
  )
}

export default PopupWithForm;
function ImagePopup({card, onClose}) {

        return (
            <div className={`popup popup_type_zoom ${card && 'popup_opened'}`}>
                <figure className="popup__zoom-container">
                    <button className="popup__close-button popup__close-button_zoom" type="button"
                            aria-label="закрыть" onClick={onClose}/>
                    <img src={card && card.link} className="popup__image" alt={card && card.name}/>
                    <figcaption className="popup__zoom-title">{card && card.name}</figcaption>
                </figure>
            </div>
        )
}

export default ImagePopup;
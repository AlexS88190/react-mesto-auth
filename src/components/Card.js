import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Card({onCardClick, card, onCardLike, onCardDelete}) {
    const currentUser = React.useContext(CurrentUserContext);

    const isOwn = card.owner._id === currentUser._id;
    const cardDeleteButtonClassName = (`elements__trash ${isOwn ? '' : 'elements__trash_hidden'}`);

    const isLiked = card.likes.some(i => i._id === currentUser._id);

    const cardLikeButtonClassName = (`elements__like-button ${isLiked ? 'elements__like-button_active' : ''}`);

    function handleClick() {
        onCardClick(card);
    }

    function handleLikeClick() {
        onCardLike(card);
    }

    function handleDeleteClick() {
        onCardDelete(card)
    }

    return (
        <li className="elements__item">
            <div className="elements__image" onClick={handleClick} style={{backgroundImage: `url(${card.link})`}}/>
            <button className={cardDeleteButtonClassName} onClick={handleDeleteClick} type="button"/>
            <div className="elements__content">
                <h2 className="elements__title">{card.name}</h2>
                <div className="elements__like-container">
                    <button className={cardLikeButtonClassName} type="button" aria-label="нравится" onClick={handleLikeClick}/>
                    <p className="elements__like-counter">{card.likes.length}</p>
                </div>
            </div>
        </li>
    )
}

export default Card


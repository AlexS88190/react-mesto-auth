import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import React from "react";

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {

    const currentUser = React.useContext(CurrentUserContext);

    const [name, setName] = React.useState(currentUser.name);
    const [description, setDescription ] = React.useState(currentUser.description);

    React.useEffect(() => {
        if (isOpen) {
            setName(currentUser.name);
            setDescription(currentUser.about);
        }
    }, [currentUser, isOpen]);

    function handleChangeName(event) {
        setName(event.target.value)
    }

    function handleChangeDescription(event) {
        setDescription(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        onUpdateUser({
            name, about: description
        });
    }

    return (
        <PopupWithForm
            name='profile'
            title='Редактировать профиль'
            isOpen={isOpen}
            onClose={onClose}
            buttonTitleSubmit='Сохранить'
            onSubmit={handleSubmit}
        >
            <input
                id="name-input"
                className="popup__input popup__input_type_name"
                type="text"
                placeholder="имя"
                name="name_profile"
                minLength="2"
                maxLength="40"
                value={name || ''}
                onChange={handleChangeName}
                required
            />
            <span className="name-input-error popup__input-error"/>
            <input
                id="about-input"
                className="popup__input  popup__input_type_about" type="text"
                placeholder="о себе"
                name="about_profile"
                minLength="2"
                maxLength="200"
                value={description || ''}
                onChange={handleChangeDescription}
                required
            />
            <span className="about-input-error popup__input-error"/>
        </PopupWithForm>
    )
}

export default EditProfilePopup
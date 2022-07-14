import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {

    const avatarRef = React.useRef();

    function handleSubmit(event) {
        event.preventDefault();
        onUpdateAvatar({
            avatar: avatarRef.current.value
        });

    }

    React.useEffect(() => {
        avatarRef.current.value = null;
    },[isOpen]);

    return (
        <PopupWithForm
            name='update'
            title='Обновить аватар'
            isOpen={isOpen}
            onClose={onClose}
            buttonTitleSubmit='Сохранить'
            onSubmit={handleSubmit}
        >
            <input
                ref={avatarRef}
                id="link-input-avatar"
                className="popup__input popup__input_type_link"
                type="url"
                placeholder="Ссылка на аватар"
                name="link"
                required
            />
            <span className="link-input-avatar-error popup__input-error"/>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;
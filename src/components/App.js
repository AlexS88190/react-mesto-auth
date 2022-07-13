import React from 'react';

import Header from "./Header.js";
import Register from "./Register.js";
import Login from "./Login.js";
//import Main from "./Main.js";
import Footer from "./Footer.js";
// import PopupWithForm from "./PopupWithForm.js";
// import ImagePopup from "./ImagePopup.js";
// import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
// import {api} from "../utils/api";
// import EditProfilePopup from "./EditProfilePopup.js";
// import EditAvatarPopup from "./EditAvatarPopup.js";
// import AddPlacePopup from "./AddPlacePopup.js";

function App() {
    // const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    // const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    // const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    // const [selectedCard, setSelectedCard] = React.useState(null);
    //
    // const [currentUser, setCurrentUser] = React.useState({});
    //
    // const [cards, setCards] = React.useState([]);
    //
    // React.useEffect(() => {
    //     api.getCards()
    //         .then(res => setCards(res))
    //         .catch(error => console.log(error));
    //
    //     api.getUserInfo()
    //         .then(res => setCurrentUser(res))
    //         .catch(error => console.log(error))
    // },[])
    //
    // function handleCardLike(card) {
    //     const isLiked = card.likes.some(i => i._id === currentUser._id);
    //     api.changeLikeCardStatus(card._id, !isLiked)
    //         .then(newCard => setCards(cards => cards.map((c) => c._id === newCard._id ? newCard : c)))
    //         .catch(error => console.log(error));
    // }
    //
    // function handleCardDelete(card) {
    //     api.deleteCard(card._id)
    //         .then(setCards(cards => cards.filter(item => item !== card)))
    //         .catch(error => console.log(error));
    // }
    //
    // function handleEditProfileClick() {
    //     setIsEditProfilePopupOpen(true);
    // }
    //
    // function handleAddPlaceClick() {
    //     setIsAddPlacePopupOpen(true);
    // }
    //
    // function handleEditAvatarClick() {
    //     setIsEditAvatarPopupOpen(true);
    // }
    //
    // function closeAllPopups() {
    //     setIsEditProfilePopupOpen(false);
    //     setIsAddPlacePopupOpen(false);
    //     setIsEditAvatarPopupOpen(false);
    //     setSelectedCard(null);
    // }
    //
    // function handleCardClick(itemListCards) {
    //     setSelectedCard(itemListCards)
    // }
    //
    // function handleUpdateUser(profile) {
    //     api.updateProfileInfo(profile.name, profile.about)
    //         .then((res) => {
    //             setCurrentUser(res);
    //             closeAllPopups();
    //         })
    //         .catch(error => console.log(error));
    // }
    //
    // function handleUpdateAvatar(avatar) {
    //     api.updateAvatar(avatar.avatar)
    //         .then((res) => {
    //             setCurrentUser(res)
    //             closeAllPopups();
    //         })
    //         .catch(error => console.log(error));
    //
    // }
    //
    // function handleAddPlaceSubmit(card) {
    //     api.addCard(card.nameCard, card.linkCard)
    //         .then((newCard) => {
    //             setCards([newCard, ...cards])
    //             closeAllPopups();
    //         })
    //         .catch(error => console.log(error));
    //
    // }

    return (
            <div className="page">
                {/*<CurrentUserContext.Provider value={currentUser}>*/}
                    <div className="page__content">
                        <Header/>
                        {/*<Register/>*/}
                        <Login/>
                        {/*<Main*/}
                        {/*    onEditProfile={handleEditProfileClick}*/}
                        {/*    onAddPlace={handleAddPlaceClick}*/}
                        {/*    onEditAvatar={handleEditAvatarClick}*/}
                        {/*    onCardClick={handleCardClick}*/}
                        {/*    cards={cards}*/}
                        {/*    onCardLike={handleCardLike}*/}
                        {/*    onCardDelete={handleCardDelete}*/}
                        {/*/>*/}
                        <Footer/>
                    </div>

                    {/*<EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>*/}

                    {/*<AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />*/}

                    {/*<EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>*/}

                    {/*<PopupWithForm*/}
                    {/*    name='remove'*/}
                    {/*    title='Вы уверены?'*/}
                    {/*    onClose={closeAllPopups}*/}
                    {/*    buttonTitleSubmit='Да'*/}
                    {/*>*/}
                    {/*</PopupWithForm>*/}

                {/*    <ImagePopup card={selectedCard} onClose={closeAllPopups}/>*/}

                {/*</CurrentUserContext.Provider>*/}
            </div>
    );
}

export default App;
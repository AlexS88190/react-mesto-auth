import React from 'react';
import Register from "./Register.js";
import Login from "./Login.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import ProtectedRoute from "./ProtectedRoute.js";
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';
import {api} from "../utils/api";
import * as mestoAuth from "../utils/mestoAuth";
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import AddPlacePopup from "./AddPlacePopup.js";
import InfoTooltip from "./InfoTooltip.js";


function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);
    const [currentUser, setCurrentUser] = React.useState({});
    const [cards, setCards] = React.useState([]);

    const [userLogin, setUserLogin] = React.useState('');
    const[loggedIn, setLoggedIn] = React.useState(false);
    const [dataMessage, setDataMessage] = React.useState(
        {
            popupMessage: null,
            pictureAlert: null,
            messageSuccess: 'Вы успешно зарегистрировались!',
            messageError: 'Что-то пошло не так! Попробуйте еще раз.'
        }
    );

    const navigate = useNavigate();


    React.useEffect(() => {
        api.getCards()
            .then(res => setCards(res))
            .catch(error => console.log(error));

        api.getUserInfo()
            .then(res => setCurrentUser(res))
            .catch(error => console.log(error));

        tokenCheck();

    }, [])

    React.useEffect(() => {
        if (loggedIn) {
            navigate('/');
        }
    }, [loggedIn])

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        api.changeLikeCardStatus(card._id, !isLiked)
            .then(newCard => setCards(cards => cards.map((c) => c._id === newCard._id ? newCard : c)))
            .catch(error => console.log(error));
    }

    function handleCardDelete(card) {
        api.deleteCard(card._id)
            .then(setCards(cards => cards.filter(item => item !== card)))
            .catch(error => console.log(error));
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setSelectedCard(null);
    }

    function handleCardClick(itemListCards) {
        setSelectedCard(itemListCards)
    }

    function handleUpdateUser(profile) {
        api.updateProfileInfo(profile.name, profile.about)
            .then((res) => {
                setCurrentUser(res);
                closeAllPopups();
            })
            .catch(error => console.log(error));
    }

    function handleUpdateAvatar(avatar) {
        api.updateAvatar(avatar.avatar)
            .then((res) => {
                setCurrentUser(res)
                closeAllPopups();
            })
            .catch(error => console.log(error));
    }

    function handleAddPlaceSubmit(card) {
        api.addCard(card.nameCard, card.linkCard)
            .then((newCard) => {
                setCards([newCard, ...cards])
                closeAllPopups();
            })
            .catch(error => console.log(error));
    }

    function handleRegister(email, password) {
        mestoAuth.register(password, email)
            .then(() => {
                setDataMessage((oldDataMessage) => ({
                    ...oldDataMessage,
                    popupMessage: true,
                    pictureAlert: true
                }));
                navigate('/sign-in')
            })
            .catch((err) => {
                setDataMessage((oldDataMessage) => ({
                    ...oldDataMessage,
                    popupMessage: false,
                    pictureAlert: false
                }));
                console.error(err)
            })
    }

    function handleLogin(email, password) {
        mestoAuth.authorize(password, email)
            .then((data) => {
                if (data.token) {
                    localStorage.setItem('jwt', data.token);
                    setLoggedIn(true);
                    setUserLogin(email);
                }
            })
            .catch((err) => {
                setDataMessage((oldDataMessage) => ({
                    ...oldDataMessage,
                    popupMessage: false,
                    pictureAlert: false
                }));
                console.error(err)
            })
    }

    function tokenCheck() {
        let jwt = localStorage.getItem('jwt');

        if (jwt) {
            mestoAuth.getContent(jwt)
                .then(res => {
                    if (res.data._id) {
                        setUserLogin(res.data.email);
                        setLoggedIn(true);
                    }
                })
                .catch(err => console.error(err))
        }
    }

    function handleLogout() {
        localStorage.removeItem('jwt');
        setUserLogin('');
        setLoggedIn(false);
        navigate('/sign-in');
    }

    function closeInfoTooltip() {
        setDataMessage((oldDataMessage) => ({
            ...oldDataMessage,
            popupMessage: null
        }));
    }

    return (
        <div className="page">
            <CurrentUserContext.Provider value={currentUser}>
                <div className="page__content">

                    <Routes>

                        <Route path='/sign-up' element={<Register handleRegister={handleRegister} />}/>

                        <Route path='/sign-in' element={<Login handleLogin={handleLogin}/>}/>

                        <Route
                            path='/'
                            element={
                                <ProtectedRoute path='/' loggedIn={loggedIn}>
                                    <Main
                                        onEditProfile={handleEditProfileClick}
                                        onAddPlace={handleAddPlaceClick}
                                        onEditAvatar={handleEditAvatarClick}
                                        onCardClick={handleCardClick}
                                        cards={cards}
                                        onCardLike={handleCardLike}
                                        onCardDelete={handleCardDelete}
                                        handleLogout={handleLogout}
                                        loggedIn={loggedIn}
                                        userLogin={userLogin}
                                    />
                                </ProtectedRoute>
                            }
                        />

                        <Route path='*'
                               element={loggedIn ? <Navigate to='/'/> : <Navigate to='/sign-in' />}/>

                    </Routes>
                    <Footer/>
                </div>


                <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}
                                  onUpdateUser={handleUpdateUser}/>

                <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit}/>

                <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}
                                 onUpdateAvatar={handleUpdateAvatar}/>

                <PopupWithForm
                    name='remove'
                    title='Вы уверены?'
                    onClose={closeAllPopups}
                    buttonTitleSubmit='Да'
                >
                </PopupWithForm>

                <ImagePopup card={selectedCard} onClose={closeAllPopups} />

                <InfoTooltip dataMessage={dataMessage} closeInfoTooltip={closeInfoTooltip} />

            </CurrentUserContext.Provider>
        </div>
    );
}

export default App;
class Api {
    constructor(cohortId, authorizationToken, baseUrl) {
        this._headers = {
            authorization: authorizationToken,
            'Content-Type': 'application/json'
        }
        this._baseUrl = `${baseUrl}/${cohortId}`
    }
    getUserInfo = () => {
        return this._addHandlers(fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        }));
    }

    updateProfileInfo = (name, about) => {
        return this._addHandlers(fetch( `${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                about: about
            })
        }));
    }

    updateAvatar = (link) => {
        return this._addHandlers(fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: link
            })
        }));
    }

    getCards = () => {
        return this._addHandlers(fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        }));
    }

    addCard = (name, link) => {
        return this._addHandlers(fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                link: link
            })
        }));
    }

    deleteCard = (cardId) => {
        return this._addHandlers(fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers
        }));
    }

    changeLikeCardStatus = (cardId, isLiked) => {
        if (isLiked) {
            return this._addHandlers(fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
                method: 'PUT',
                headers: this._headers
            }));
        }
        return this._addHandlers(fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: this._headers
        }));
    }

    _addHandlers(promise) {
        return promise
            .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
    }
}

const api = new Api('cohort-41', 'c5ad47cd-94e1-4e0d-ba61-6865eeedf90c', 'https://mesto.nomoreparties.co/v1');

export {api}
"use strict"

class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

async function loadJson(url) {
    let response = await fetch(url);
    if (response.status === 200) {
        return response.json();
    } else {
        throw new HttpError(response);
    }
}

async function demoGithubUser() {
    while (true) {
        let name = prompt("Введите логин?", "iliakan");
        try {
            let user = await loadJson(`https://api.github.com/users/${name}`);
            if (user == null) return new Error(`ThisUserDoesNotExist`)
            alert(`Полное имя: ${user.name}.`);
            return user;
        } catch {
            alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
        }
    }
}

let promise = demoGithubUser();
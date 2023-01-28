import { makeAutoObservable } from "mobx";

class Token {
  _token: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  setToken(token: string) {
    this._token = token;
  }
  getToken() {
    return this._token;
  }
}

export const TokenStore = new Token();

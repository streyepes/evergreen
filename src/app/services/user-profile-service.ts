import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UserProfileService {
    private _email: string = '';
    private _userData: any = null;

    get email(): string {
        return this._email;
    }

    get userData(): any {
        return this._userData;
    }

    loadUserProfile(email: string): boolean {
        console.log(email);
        let userData = localStorage.getItem(email);

        if (userData === null) return false;
        
        this._email = email;
        this._userData = JSON.parse(userData);
        this._userData.lastLogin = Date.now()
        
        return true;
    }

    createUserProfile(email: string) {
        const newProfileData = {lastLogin: Date.now()}
        this._email = email;
        this._userData = newProfileData;
        this.saveProfile();
    }

    unloadUserProfile(save = true) {
        if (save) this.saveProfile();
        this._email = '';
        this._userData = null;
    }

    saveProfile() {
        console.log('save', this._email, this._userData);
        localStorage.setItem(this._email, JSON.stringify(this._userData));
    }
}

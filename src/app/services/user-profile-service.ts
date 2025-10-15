import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UserProfileService {
    private _email: string = '';
    private _userData: any = null;
    private _isLoggedIn = false;

    get email(): string {
        return this._email;
    }

    get userData(): any {
        return this._userData;
    }

    get isLoggedIn(): boolean {
        return this._isLoggedIn;
    }

    // add properExit flag, is true until logout is called
   
    loadUserProfile(email: string): boolean {
        let userData = localStorage.getItem(email);

        if (userData === null) return false;
        
        this._email = email;
        this._userData = JSON.parse(userData);
        this._userData.lastLogin = Date.now()
        this._isLoggedIn = true;
        
        return true;
    }

    createUserProfile(email: string) {
        const newProfileData = {lastLogin: Date.now()}
        this._email = email;
        this._userData = newProfileData;
        this.saveProfile();
        this._isLoggedIn = true;
    }

    unloadUserProfile(save = true) {
        if (save) this.saveProfile();
        this._email = '';
        this._userData = null;
        this._isLoggedIn = false;
    }

    saveProfile() {
        console.log('save', this._email, this._userData);
        localStorage.setItem(this._email, JSON.stringify(this._userData));
    }
}

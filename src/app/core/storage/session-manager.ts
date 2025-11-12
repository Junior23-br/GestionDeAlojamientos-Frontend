import { Injectable, PLATFORM_ID } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class SessionManager {
    constructor() { }
    setItem(key: string, value: string): void {
        sessionStorage.setItem(key, value);
    }
    getItem(key: string): string | null {
        return sessionStorage.getItem(key);
    }
    removeItem(key: string): void {
        sessionStorage.removeItem(key);
    }
}
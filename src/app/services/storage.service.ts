import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class StorageService {
  get(key: string) : unknown{
    return localStorage.getItem(key);
  };

  set(key: string, value: unknown) {
    localStorage.setItem(key, value as string);
  };

  remove(key: string) {
    localStorage.removeItem(key);
  };

  clear() {
    localStorage.clear();
  };
}
import { Inject, Injectable, signal } from "@angular/core";
import { StorageService } from "./storage.service";
import { DOCUMENT } from "@angular/common";
import { ColorSchemeType } from "../../models/base/theme.type";
import { STORAGE_KEY } from "../../configs/storage.config";
import { fromEvent, map, Observable, startWith, Subscription } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  scheme$ = signal<ColorSchemeType>('system');

  set scheme(scheme: ColorSchemeType) {
    if (scheme === 'system') {
      this.scheme$.set(scheme);
      this._storage.remove(STORAGE_KEY.SCHEME);

      this._listener = this._getListener().subscribe(scheme => {
        this._reflect(scheme);
      });

    } else {
      this.scheme$.set(scheme);
      this._storage.set(STORAGE_KEY.SCHEME, scheme);

      this._listener?.unsubscribe();
      this._reflect(scheme);
    }
  }

  private _listener: Subscription = new Subscription();

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private _storage: StorageService,
  ) {
    this._initialize();
  }

  private _initialize() {
    let scheme = this._storage.get('scheme') as ColorSchemeType;

    if (
      scheme &&
      !['dark', 'light', 'system'].includes(scheme)
    ) {
      scheme = this._getSystemScheme();
    }

    this.scheme = scheme || 'system';
  }

  private _reflect(scheme: 'dark' | 'light') {
    this._document?.firstElementChild?.setAttribute('data-theme', scheme);
  }

  private _getSystemScheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  private _getListener(): Observable<'dark' | 'light'> {
    return fromEvent(
      window.matchMedia('(prefers-color-scheme: dark)'),
      'change'
    ).pipe(
      map((event: any) =>
        event.matches ? 'dark' : 'light'
      ),
      startWith<'dark' | 'light'>(this._getSystemScheme())
    );
  }
}
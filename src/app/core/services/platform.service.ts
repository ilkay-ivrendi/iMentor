import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {
  private platformId = inject(PLATFORM_ID);
  
  get isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }
}

import { Directive, input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkDirective {
  queryParam = input('myapp', { alias: 'appSafeLink' });

  constructor() {
    console.log('SafeLinkDirective is active!');
  }

  onConfirmLeavePage(evt: MouseEvent) {
    const wantsToLeave = window.confirm('Do you want to leave the app?');

    if (wantsToLeave) {
      const address = (evt.target as HTMLAnchorElement).href;
      (evt.target as HTMLAnchorElement).href =
        address + '?from=' + this.queryParam();
      return;
    }

    evt.preventDefault();
  }
}

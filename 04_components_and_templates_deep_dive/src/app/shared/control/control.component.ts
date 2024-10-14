import {
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent {
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //   console.log('Clicked!');
  // }
  label = input.required<string>();
  private el = inject(ElementRef); // refers to the host element
  // @ContentChild('input') private control?: ElementRef<
  //   HTMLInputElement | HTMLTextAreaElement
  // >;
  private control =
    contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>(
      'input'
    );

  onClick() {
    console.log(this.el);
    console.log(this.control());
  }
}

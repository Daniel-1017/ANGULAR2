import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  Output,
  output,
} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // Decorator approach
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  @Input({ required: true }) user!: {
    id: string;
    name: string;
    avatar: string;
  };
  @Output() select = new EventEmitter();

  // Approach using output function instead of @Output decorator
  // select = output<string>();

  // Signals approach
  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() => 'assets/users/' + this.avatar());

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}

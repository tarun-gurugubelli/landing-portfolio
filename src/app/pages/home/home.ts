import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeToggle } from '../../components/theme-toggle/theme-toggle';
import { ContactModal } from '../../components/contact-modal/contact-modal';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ThemeToggle, ContactModal],
  templateUrl: './home.html',
})
export class Home {
  isContactModalOpen = signal(false);

  openContactModal() {
    this.isContactModalOpen.set(true);
  }

  closeContactModal() {
    this.isContactModalOpen.set(false);
  }

  currentYear = new Date().getFullYear();
}

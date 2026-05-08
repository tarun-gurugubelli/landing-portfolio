import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-modal',
  imports: [CommonModule],
  templateUrl: './contact-modal.html',
})
export class ContactModal {
  isOpen = input<boolean>(false);
  closed = output<void>();

  close() {
    this.closed.emit();
  }

  connect(platform: 'github' | 'linkedin' | 'email') {
    const urls: Record<string, string> = {
      github: 'https://github.com/tarun-gurugubelli',
      linkedin: 'https://linkedin.com/in/tarun-gurugubelli',
      email: "mailto:tarungurugubelli@outlook.com?subject=Let's Connect&body=Hi, I'd like to discuss potential collaboration opportunities.",
    };
    window.open(urls[platform], '_blank');
    this.close();
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { TaskModel } from '../models/task.model'
import { Column } from '../models/column.model'

@Component({
  selector: 'app-task-create-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-create-modal.component.html',
  styleUrl: './task-create-modal.component.scss',
})
export class TaskCreateModalComponent {
  @Input() title: string = 'Modal Title';
  @Input() isVisible: boolean = false;
  @Input() confirmText: string = 'Confirm';
  @Input() cancelText: string = 'Cancel';

  @Output() onConfirm = new EventEmitter<void>();
  @Output() onClose = new EventEmitter<void>();

  confirm() {
    this.onConfirm.emit();
  }

  close() {
    this.onClose.emit();
  }
}

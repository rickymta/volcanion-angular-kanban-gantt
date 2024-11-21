import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common'
import { TaskModel } from '../models/task.model'
import { Column } from '../models/column.model'

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input() task!: TaskModel; // Nhận nhiệm vụ từ column
  @Input() parentColumn!: Column; // Nhận thông tin cột chứa nhiệm vụ
  @Output() dragTask = new EventEmitter<TaskModel>(); // Sự kiện khi nhiệm vụ được kéo
  @Output() dragTaskStart = new EventEmitter<{ task: TaskModel; column: Column }>();

  onDragStart(event: DragEvent) {
    // Lưu nhiệm vụ vào DataTransfer
    event.dataTransfer?.setData('text/plain', JSON.stringify(this.task));
    // Phát ra sự kiện khi kéo nhiệm vụ
    this.dragTask.emit(this.task);
    this.dragTaskStart.emit({ task: this.task, column: this.parentColumn });
  }

  onDragEnd(event: DragEvent) {
    // Optional: Reset trạng thái hoặc xử lý sau khi kéo xong
  }
}

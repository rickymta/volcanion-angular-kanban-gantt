import { Component, Input, Output, EventEmitter } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Column } from '../models/column.model'
import { TaskModel } from '../models/task.model'
import { TaskComponent } from '../task/task.component'

@Component({
  selector: 'app-column',
  standalone: true,
  imports: [
    CommonModule,
    TaskComponent,
  ],
  templateUrl: './column.component.html',
  styleUrl: './column.component.scss',
})
export class ColumnComponent {
  @Input() column!: Column // Cột chứa các nhiệm vụ
  @Output() dropTask = new EventEmitter<TaskModel>() // Sự kiện khi nhiệm vụ bị thả
  @Output() dragTaskStart = new EventEmitter<{ task: TaskModel; column: Column }>();

  onDragOver(event: DragEvent) {
    event.preventDefault() // Cho phép thả
    const target = event.currentTarget as HTMLElement
    target.classList.add('dragover') // Thêm class để làm nổi bật
  }

  onDragTaskStart(event: { task: TaskModel, column: Column }) {
    this.dragTaskStart.emit(event)
  }

  onDragLeave(event: DragEvent) {
    const target = event.currentTarget as HTMLElement
    target.classList.remove('dragover') // Xóa class khi di chuột ra ngoài
  }

  onDrop(event: DragEvent) {
    event.preventDefault()
    const target = event.currentTarget as HTMLElement
    target.classList.remove('dragover') // Xóa class khi di chuột ra ngoài

    // Lấy thông tin nhiệm vụ từ DataTransfer
    const taskData = event.dataTransfer?.getData('text/plain')
    if (taskData) {
      const task: TaskModel = JSON.parse(taskData)
      this.dropTask.emit(task) // Phát ra sự kiện để thêm nhiệm vụ vào cột này
    }
  }

  onDragTask(task: TaskModel) {
    this.dropTask.emit(task)
  }
}

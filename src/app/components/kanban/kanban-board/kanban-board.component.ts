import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Column } from '../models/column.model'
import { TaskModel } from '../models/task.model'
import { ColumnComponent } from '../column/column.component'
import { FormsModule } from '@angular/forms'
import { TaskCreateModalComponent } from '../task-create-modal/task-create-modal.component'

@Component({
  selector: 'app-kanban-board',
  standalone: true,
  imports: [
    CommonModule,
    ColumnComponent,
    FormsModule,
    TaskCreateModalComponent,
  ],
  templateUrl: './kanban-board.component.html',
  styleUrl: './kanban-board.component.scss',
})
export class KanbanBoardComponent {
  columns: Column[] = [
    {
      id: 'todo', title: 'To Do', tasks: [{
        id: 'task-1',
        code: 'T-001',
        status: 'todo',
        title: '[T-001] Design Wireframes',
        planStartDate: new Date(2024, 10, 21),
        planEndDate: new Date(2024, 10, 25),
        actualStartDate: undefined,
        actualEndDate: undefined,
        assignee: {
          id: '1',
          name: 'Alice',
          avatar: 'https://robohash.org/omnisautipsam.png?size=50x50&set=set1',
        },
        description: 'Create wireframes for the new dashboard',
        labels: [
          {
            id: '1',
            name: 'Bug',
            color: '#f44336',
          },
          {
            id: '2',
            name: 'Comment',
            color: '#ffeb3b',
          },
          {
            id: '1',
            name: 'Notification',
            color: '#2196f3',
          },
        ],
      },
        {
          id: 'task-2',
          code: 'T-002',
          status: 'todo',
          title: '[T-002] Setup Project',
          planStartDate: new Date(2024, 10, 20),
          planEndDate: new Date(2024, 10, 23),
          actualStartDate: new Date(2024, 10, 20),
          actualEndDate: undefined,
          assignee: {
            id: '1',
            name: 'Bob',
            avatar: 'https://robohash.org/nobisbeataeplaceat.png?size=50x50&set=set1',
          },
          description: 'Setup Angular project structure',
        }],
    },
    { id: 'inprogress', title: 'In Progress', tasks: [] },
    { id: 'done', title: 'Done', tasks: [] },
  ]

  // Lưu trữ cột nguồn
  private sourceColumn?: Column

  showModal: boolean = false
  selectedColumn?: Column // Cột được chọn
  newTask: TaskModel = {
    id: '',
    code: '',
    status: 'todo',
    title: '',
    planStartDate: new Date(),
    planEndDate: new Date(),
    assignee: null,
    description: '',
  }

  openModal() {
    this.showModal = true
    this.resetNewTask()
  }

  closeModal() {
    this.showModal = false
  }

  resetNewTask() {
    this.newTask = {
      id: '',
      code: '',
      title: '',
      status: 'todo',
      planStartDate: new Date(),
      planEndDate: new Date(),
      assignee: null,
      description: '',
    }
  }

  addTask() {
    if (this.selectedColumn) {
      const task = { ...this.newTask, id: Date.now().toString() } // Tạo ID duy nhất
      this.selectedColumn.tasks.push(task) // Thêm task vào cột được chọn
      this.closeModal() // Đóng modal
    }
  }

  onDragTaskStart(event: { task: TaskModel; column: Column }) {
    this.sourceColumn = event.column // Lưu lại cột nguồn
  }

  onDropTask(task: TaskModel, targetColumn: Column) {
    if (this.sourceColumn && this.sourceColumn !== targetColumn) {
      this.sourceColumn.tasks = this.sourceColumn.tasks.filter(t => t.id !== task.id)
    }

    if (!targetColumn.tasks.some(t => t.id === task.id)) {
      task.status = targetColumn.title.toLowerCase().replace(' ', '_')
      targetColumn.tasks.push(task)
    }
  }
}

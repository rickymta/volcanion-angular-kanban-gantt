import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { TaskModel } from '../kanban/models/task.model'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-gantt-chart',
  templateUrl: './gantt-chart.component.html',
  standalone: true,
  styleUrls: ['./gantt-chart.component.scss'],
  imports: [
    FormsModule,
    CommonModule,
    RouterLink,
  ],
})
export class GanttChartComponent implements OnInit {
  @Input() tasks: TaskModel[] = [
    {
      id: '1',
      title: 'Task 1',
      code: 'T-001',
      planStartDate: new Date('2024-11-01'),
      planEndDate: new Date('2024-11-10'),
      actualStartDate: new Date('2024-11-02'),
      actualEndDate: new Date('2024-11-08'),
      assignee: null,
      status: 'In Progress',
      description: 'Description of Task 1',
      progress: 50,
      childrenLevel: 0
    },
    {
      id: '2',
      title: 'Task 2',
      code: 'T-002',
      planStartDate: new Date('2024-11-05'),
      planEndDate: new Date('2024-11-15'),
      actualStartDate: new Date('2024-11-06'),
      actualEndDate: new Date('2024-11-14'),
      assignee: null,
      status: 'In Progress',
      description: 'Description of Task 2',
      progress: 80,
      childrenLevel: 1,
      parentId: '1'
    },
    {
      id: '3',
      title: 'Task 3',
      code: 'T-003',
      planStartDate: new Date('2024-11-08'),
      planEndDate: new Date('2024-11-18'),
      actualStartDate: new Date('2024-11-09'),
      actualEndDate: new Date('2024-11-17'),
      assignee: null,
      status: 'In Progress',
      description: 'Description of Task 3',
      progress: 85,
      childrenLevel: 2,
      parentId: '2'
    },
    {
      id: '4',
      title: 'Task 4',
      code: 'T-004',
      planStartDate: new Date('2024-11-05'),
      planEndDate: new Date('2024-11-15'),
      actualStartDate: new Date('2024-11-06'),
      actualEndDate: new Date('2024-11-14'),
      assignee: null,
      status: 'In Progress',
      description: 'Description of Task 4',
      progress: 75,
      childrenLevel: 0
    }
  ];
  filteredTasks: TaskModel[] = [];

  selectedMonth: string = '2024-11';
  chartWidth = 1800;
  chartHeight = 400;
  headerHeight = 20;
  taskHeight = 20;
  dayWidth: number = 40;
  firstColumnWidth = 200;
  chartStartDate: Date = new Date('2024-11-01');

  // Thuộc tính để lưu thông tin của task khi hover
  hoveredTask: TaskModel | null = null;
  hoveredTaskX: number = 0;
  hoveredTaskY: number = 0;
  isMouseInTaskOrDropdown: boolean = false;

  // Hàm hiển thị thông tin task khi hover
  showTaskInfo(task: TaskModel, event: MouseEvent): void {
    this.hoveredTask = task;
    const index = this.tasks.indexOf(task);
    this.hoveredTaskX = this.taskStartX(task.planStartDate); // Vị trí X của task
    this.hoveredTaskY = this.taskStartYAtIndex(index) + 20; // Vị trí Y của task
    this.isMouseInTaskOrDropdown = true;
  }

  keepTaskInfoVisible(): void {
    this.isMouseInTaskOrDropdown = true;
  }

  // Hàm ẩn dropdown khi hover hết
  hideTaskInfo(): void {
    // Đợi một khoảng thời gian nhỏ để kiểm tra nếu chuột rời khỏi cả dropdown và task
    setTimeout(() => {
      if (!this.isMouseInTaskOrDropdown) {
        this.hoveredTask = null;
      }
    }, 100);
  }

  removeTaskInfoVisibility(): void {
    this.isMouseInTaskOrDropdown = false;
    this.hideTaskInfo(); // Kiểm tra lại trạng thái khi chuột rời khỏi dropdown
  }

  ngOnInit(): void {
    this.updateChart();
  }

  updateChart() {
    // Logic to update chart based on selected month
    const [year, month] = this.selectedMonth.split('-').map(Number);

    // Lọc các task trong khoảng thời gian của tháng được chọn
    this.filteredTasks = this.tasks.filter(task => {
      const taskMonth = task.planStartDate.getMonth() + 1;
      const taskYear = task.planStartDate.getFullYear();
      return taskYear === year && taskMonth === month;
    });
  }

  taskStartX(startDate: Date): number {
    const dayDiff = (startDate.getTime() - this.chartStartDate.getTime()) / (1000 * 60 * 60 * 24); // Số ngày từ chartStartDate đến startDate
    const x = this.firstColumnWidth + dayDiff * this.dayWidth;
    return Math.max(0, x); // Không cho phép giá trị âm
  }

  taskWidth(startDate: Date, endDate: Date): number {
    const dayDiff = (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24); // Số ngày giữa startDate và endDate
    const width = dayDiff * this.dayWidth;
    return Math.max(0, width); // Không cho phép chiều rộng âm
  }

  taskPercentWith(startDate: Date, endDate: Date, progress: number): number {
    let width: number = this.taskWidth(startDate, endDate);
    return width * progress / 100;
  }

  getDaysInChart(): Date[] {
    const days: Date[] = [];
    const currentDate = new Date(this.chartStartDate);

    while (currentDate.getTime() < this.chartStartDate.getTime() + this.chartWidth / this.dayWidth * (1000 * 60 * 60 * 24)) {
      days.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return days;
  }

  taskStartYAtIndex(index: number): number {
    return this.taskStartY + index * (this.taskHeight + 5);  // Thêm 5px vào mỗi task
  }

  get taskStartY(): number {
    return this.headerHeight + 20;
  }

  getChildTasks(parentId: string): TaskModel[] {
    return this.tasks.filter(task => task.parentId === parentId);
  }

  drawConnectorPath(parent: TaskModel, child: TaskModel): string {
    const parentX = this.taskStartX(parent.planStartDate); // Vị trí X của task cha
    const parentY = this.taskStartYAtIndex(this.tasks.indexOf(parent)) + this.taskHeight / 2; // Vị trí Y của task cha

    const childX = this.taskStartX(child.planStartDate); // Vị trí X của task con
    const childY = this.taskStartYAtIndex(this.tasks.indexOf(child)) + this.taskHeight / 2; // Vị trí Y của task con

    const cornerRadius = 5; // Bán kính bo góc
    const gap = 20;

    // Tính toán các điểm để vẽ đường nối
    const outLeftX = parentX - gap; // Đi ra bên trái từ mép ngoài của task cha
    const inRightX = childX;       // Mép trái của task con

    if (parentY === childY) {
      // Nếu cùng trên một hàng, vẽ đường thẳng ngang
      return `M ${parentX} ${parentY} H ${inRightX}`;
    } else {
      // Nếu khác hàng, vẽ đường cong bo góc
      return `
      M ${parentX} ${parentY}
      H ${outLeftX}
      V ${childY - cornerRadius}
      A ${cornerRadius} ${cornerRadius} 1 0 0 ${outLeftX + cornerRadius} ${childY}
      H ${inRightX}
    `;
    }
  }
}

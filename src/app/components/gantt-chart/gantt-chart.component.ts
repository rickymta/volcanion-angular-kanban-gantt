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
      code: 'T1',
      planStartDate: new Date('2024-11-01'),
      planEndDate: new Date('2024-11-10'),
      actualStartDate: new Date('2024-11-02'),
      actualEndDate: new Date('2024-11-08'),
      assignee: null,
      status: 'In Progress',
      description: 'Description of Task 1',
      progress: 50
    },
    {
      id: '2',
      title: 'Task 2',
      code: 'T2',
      planStartDate: new Date('2024-11-05'),
      planEndDate: new Date('2024-11-15'),
      actualStartDate: new Date('2024-11-06'),
      actualEndDate: new Date('2024-11-14'),
      assignee: null,
      status: 'In Progress',
      description: 'Description of Task 2',
      progress: 75
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

  // Để giữ trạng thái mở/đóng cho mỗi task
  expandedTasks: Set<string> = new Set();

  // Hàm kiểm tra xem task có được mở hay không
  isTaskExpanded(taskId: string): boolean {
    return this.expandedTasks.has(taskId);
  }

  // Hàm mở/đóng task con
  toggleTask(taskId: string): void {
    if (this.expandedTasks.has(taskId)) {
      this.expandedTasks.delete(taskId);
    } else {
      this.expandedTasks.add(taskId);
    }
  }

  // Hàm hiển thị thông tin task khi hover
  showTaskInfo(task: TaskModel, index: number): void {
    this.hoveredTask = task;
    this.hoveredTaskX = this.taskStartX(task.planStartDate); // Vị trí X của task
    this.hoveredTaskY = this.taskStartYAtIndex(index); // Vị trí Y của task
  }

  // Hàm ẩn dropdown khi hover hết
  hideTaskInfo(): void {
    this.hoveredTask = null;
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
}

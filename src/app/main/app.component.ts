import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { KanbanBoardComponent } from '../components/kanban/kanban-board/kanban-board.component'
import { GanttChartComponent } from '../components/gantt-chart/gantt-chart.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, KanbanBoardComponent, GanttChartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-kanban'
}

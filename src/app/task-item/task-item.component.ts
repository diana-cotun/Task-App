import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForOf} from "@angular/common";
import {Task} from "../service/task.model";

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent implements OnInit {

  @Input() task: Task = new Task("", "");
  @Output() taskClicked: EventEmitter<void> = new EventEmitter();
  @Output() editClicked: EventEmitter<void> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  onTaskClicked(): void {
    console.log("Task was click")
    this.taskClicked.emit();
  }

  onEditClicked() {
    this.editClicked.emit();
  }


}

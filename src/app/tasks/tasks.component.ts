import {Component, contentChild, OnInit} from '@angular/core';
import {MatFormField, MatInput} from "@angular/material/input";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButton} from "@angular/material/button";
import {Task} from "../service/task.model";
import {DataService} from "../service/data.service";
import {NgForOf, NgIf} from "@angular/common";
import {TaskItemComponent} from "../task-item/task-item.component";
import {EditTaskDialogComponent} from "../edit-task-dialog/edit-task-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    MatInput,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButton,
    NgForOf,
    NgIf,
    TaskItemComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {

  taskForm: FormGroup;
  tasks: Task[] = [];
  showValidationErrors: boolean = false;

  constructor(private formBuilder: FormBuilder, private dataService: DataService, private dialog: MatDialog) {
    this.taskForm = formBuilder.group({
      title: ["", Validators.required],
      description: [""]
    });
  }

  ngOnInit(): void {
    this.tasks = this.dataService.getAllTasks();
  }


  onSave() {
    if (this.taskForm.invalid) {
      return this.showValidationErrors = true;
    }
    this.dataService.addTask(this.taskForm.value);
    this.showValidationErrors = false;
    this.taskForm.reset();
  }

  onTaskClicked(task: Task) {
    task.completed = !task.completed;
  }

  onEditTask(task: Task) {
    // ew need intex of task
    const indexTask = this.tasks.indexOf(task);
    // user need to put the new information

    let dialogRef = this.dialog.open(EditTaskDialogComponent, {
      width: '600px'
    });

    // this.dataService.updateTask(task.)
  }

}

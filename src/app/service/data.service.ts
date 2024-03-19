import { Injectable } from '@angular/core';
import {Task} from "./task.model";

@Injectable({
  providedIn: 'root'
})

export class DataService {

  tasks : Array<Task> = [
    new Task("test", "test description", true),
    new Task("test", "test description", false)
  ]

  constructor() { }

  getAllTasks() {
    return this.tasks;
  }

  addTask(task : Task) {
    this.tasks.push(task);
  }

  updateTask(taskIndex : number, updatedTask : Task) {
    this.tasks[taskIndex] = updatedTask;
  }

  deleteTask(taskIndex : number) {
    this.tasks.splice(taskIndex, 1);
  }



}


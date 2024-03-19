import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogContent, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatLabel} from "@angular/material/form-field";
import {MatFormField, MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {Task} from "../service/task.model";


@Component({
  selector: 'app-edit-task-dialog',
  standalone: true,
  imports: [
    MatDialogContent,
    FormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    MatButton
  ],
  templateUrl: './edit-task-dialog.component.html',
  styleUrl: './edit-task-dialog.component.css'
})
export class EditTaskDialogComponent implements OnInit{

  taskForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<EditTaskDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public task: Task) {
    this.taskForm = formBuilder.group({
      title: [""],
      description: [""]
    });
  }

  ngOnInit(): void {
  }

  onSave() {

  }

  onClose() {
    this.dialogRef.close();
  }

}

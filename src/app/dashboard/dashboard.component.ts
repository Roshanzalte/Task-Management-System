import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
   selector: 'app-dashboard',
   standalone: true,
   imports: [ReactiveFormsModule, DatePipe, CommonModule],
   templateUrl: './dashboard.component.html',
   styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
   today: Date = new Date();
   taskform: FormGroup;
   tasklist: any[] = [];
   useremail :string ='';


   constructor(private fb: FormBuilder, private router: Router) {

      this.taskform = this.fb.group({
         description: '',
         date: '',
         tags: ''
      })
   }
   ngOnInit() {
      this.loadTasks();

      const userdataemail =JSON.parse(localStorage.getItem('userdata') || '{}');
      this.useremail = userdataemail.name || '';
   }
   onLogout() {
      this.router.navigate(['/login'])
   }
   onAddtask() {
      if (this.taskform.valid) {
         const taskdata = this.taskform.value;

         let existingTask: any[] = [];
         existingTask = JSON.parse(localStorage.getItem('taskdata') || '[]')

         existingTask.push(taskdata);
         localStorage.setItem('taskdata', JSON.stringify(existingTask));

         this.taskform.reset();

         this.loadTasks()

      }
   }


   loadTasks() {
      const storedtasks = JSON.parse(localStorage.getItem('taskdata') || '[]')
      this.tasklist = Array.isArray(storedtasks) ? storedtasks : [];
   }


   deleteTask(index:number){
     this.tasklist.splice(index,1);
     localStorage.setItem('taskdata',JSON.stringify(this.tasklist))
   }
}

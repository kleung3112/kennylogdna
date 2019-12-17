import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mainarea',
  templateUrl: './mainarea.component.html',
  styleUrls: ['./mainarea.component.css']
})
export class MainareaComponent implements OnInit {

  msgForm: FormGroup;
  errorMsg = '';

  constructor( private userService: UserService, private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.msgForm = this.fb.group({
      msg: ['', Validators.required]
    });
  }

  submitMsg(msgForm: FormGroup) {
    if (msgForm.valid) {
      this.userService.sendMsg(msgForm.value.msg)
      .subscribe( (data: any) => {
        console.log(data);
        alert('Message sent successfully to server. Refer to browser console for more details.');
      },
      err => {
        console.log(err);
        alert(err.message);
      },
      () => console.log('Send message complete')
      );
    }
    else {
      alert('Message cannot be empty.');
    }
  }
}

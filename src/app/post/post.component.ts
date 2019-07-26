import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  dataSource;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getAllPosts();
  }
  postForm=new FormGroup({
    name:new FormControl('',Validators.required),
    post:new FormControl('',Validators.required),
  })
  postFormSubmit(form){
    if(this.postForm.valid){
      // console.log(form);
      this.http.post('/api/post/create',form).subscribe(this.cb)
    }else{
      Swal.fire('Oops...', 'Please Fill both the Fields!', 'error')
    }
  }
  cb=(dt)=>{
    // console.log(dt);
    if(dt._id){
      Swal.fire('Done', 'Your Post Have Been Posted', 'success');
      this.postForm.reset({});
      this.getAllPosts();
    }else{
      Swal.fire('Oops...', 'Something went wrong, Please try Again later', 'error')
      this.getAllPosts();
    }
  }
  getAllPosts(){
    this.http.get('/api/post/allPost').subscribe(this.cb1)
  }
  cb1=(dt)=>{
    // console.log(dt)
    if(dt[0]._id){
     this.dataSource=dt;
    }
  }
  displayedColumns: string[] = ['date', 'name','votes', 'post','action'];
  vote(e){
    // console.log(e)
    if(e._id){
      if(e.vote){
        var vote=e.vote+1;
        var ob={
          vote:vote,
          id:e._id
        }
        this.http.post('/api/post/vote',ob).subscribe(this.cb2)
      }else{
        var obj={
          vote:1,
          id:e._id
        }
        // console.log(obj)
        this.http.post('/api/post/vote',obj).subscribe(this.cb2)
      }
    
    }
  }
  cb2=(dt)=>{
    // console.log(dt)
    this.getAllPosts();
  }
}

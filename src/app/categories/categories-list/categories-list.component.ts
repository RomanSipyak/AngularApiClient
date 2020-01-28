import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/category/category.service';
import { Category } from 'src/app/shared/category/category.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styles: []
})
export class CategoriesListComponent implements OnInit {

  constructor(private service: CategoryService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
 }

 populateForm(category: Category){
   this.service.formData = Object.assign({},category);
 }

 onDelete(Id)
 {
     if (confirm('Are you sure to delete this record ?')) {
       this.service.deleteCategory(Id)
         .subscribe(res => {
           debugger;
           this.service.refreshList();
           this.toastr.warning('Deleted successfully', 'Payment Detail Register');
         },
           err => {
             debugger;
             console.log(err);
           });
     }
 }
}




  


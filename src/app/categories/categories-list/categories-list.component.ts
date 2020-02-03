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

  populateForm(category: Category) {
    this.service.formData = Object.assign({}, category);
  }

  onDelete(Id) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deleteCategory(Id)
        .subscribe(res => {
          this.service.refreshList();
          this.toastr.warning('Deleted successfully', 'Category was Deleted');
        },
          err => {
            this.toastr.error(err.message);
          });
    }
  }
}







import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MediaItemService } from '../services/media-item.service';
import { lookupMediumListToken, lookupCategoryListToken } from '../providers';

@Component({
  selector: 'app-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})

export class MediaItemFormComponent implements OnInit {
  form;
  
  constructor(private formBuilder: FormBuilder,
              private mediaItemService: MediaItemService ,
              @Inject(lookupMediumListToken) public lookupMediumLists,
              @Inject(lookupCategoryListToken) public lookupCategoryLists) {
    
  }
  
  ngOnInit() {
    this.form = this.formBuilder.group({
      medium: this.formBuilder.control('Movies'),
      name: this.formBuilder.control('', Validators.compose([Validators.required, Validators.pattern('[\\w\\-\\s\\/]+')])),
      category: this.formBuilder.control(''),
      year: this.formBuilder.control('', this.yearValidator),
    });
  }
  
  yearValidator(control) {
    if(control.value.trim().length === 0) {
      return null;
    }
    const year = parseInt(control.value, 10);
    const minYear = 1900;
    const maxYear = 2100;
    if(year >= minYear && year <= maxYear) {
      return null;
    } else {
        return {
          'year': true
        }
      }
  }

  onSubmit(mediaItem) {
    console.log(mediaItem);
    this.mediaItemService.add(mediaItem)
  }
}

import { OpaqueToken } from '@angular/core';

export const lookupMediumListToken = new OpaqueToken('lookupMediumListToken');

export const lookupCategoryListToken = new OpaqueToken('lookupCategoryListToken');

export const lookupMediumLists = {
  mediums: ['Movies', 'Series']
};

export const lookupCategoryLists = {
  categories: ['Action', 'Comedy', 'Drama', 'Horror', 'Science Fiction']
};

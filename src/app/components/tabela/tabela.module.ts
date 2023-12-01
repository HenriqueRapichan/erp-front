import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class TabelaModule {}

export interface ITableHeader{
  index: number;
  key: string;
  isSelected: boolean;
}
export interface IDynamicTable{
  headers: ITableHeader[] ;
  data: any[];
}

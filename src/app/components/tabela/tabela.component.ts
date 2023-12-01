import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { IDynamicTable, ITableHeader } from './tabela.module';


@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {
  constructor(private changeDetector: ChangeDetectorRef){

  }
  public page: number = 1;
  public pageSize: any = 10
  tableData!: IDynamicTable; 
  allHeaders!: ITableHeader[];
  dragTrace!: {
    src: number; dest: number;
  }
  tableFilter!: IDynamicTable;

  ngOnInit(): void {
    this.tableData ={
      headers: [],
      data: []
    }

    this.tableFilter = {
      headers: [],
      data: []
    }
    this.tableFilter.data = this.tableData.data;
  }

  render(headers: any, data: any []){
    this.tableData = {
      headers: headers.filter((x:any) => x.isSelected),
      data: data
    };
    this.tableFilter ={
      headers: headers.filter((x:any) => x.isSelected),
      data: data
    }
    this.allHeaders = headers;
    this.resetDragTracer();
    this.changeDetector.detectChanges();
  }

  private resetDragTracer() {
    this.dragTrace = {
      src: -1,
      dest: -1
    }
  } 

  toogleHeader(index: number){
    const isSelected = this.allHeaders[index].isSelected;
    this.allHeaders[index].isSelected = !isSelected;
    this.tableData.headers = this.allHeaders.filter((x:any)=> x.isSelected);
    this.tableData.headers.forEach((x, i) => x.index = i);
  }

  onDragstart(i: number){
    this.dragTrace.src = i;
  }

  onDragover(i: number){
    this.dragTrace.dest = i;
  }
  onDragend(){
    const abort = this.dragTrace.src === -1 || this.dragTrace.dest === -1 ;

    if (abort) {
      this.resetDragTracer();
      return;
    }
  
  this.tableData.headers[this.dragTrace.src].index = this.dragTrace.dest;
  this.tableData.headers[this.dragTrace.dest].index = this.dragTrace.src;

  this.allHeaders[this.dragTrace.src].index = this.dragTrace.dest;
  this.allHeaders[this.dragTrace.dest].index = this.dragTrace.src;

  const ascending = (a: any, b: any) => a.index > b.index ? 1 : -1;
  
  this.tableData.headers.sort(ascending);
  this.allHeaders.sort(ascending);
  this.tableData.headers.forEach((x, i) => x.index = i);

  this.resetDragTracer();
}

transform(items: any[], searchText: string) : any{
  debugger
  console.log(items);
  if (!items) {
    return [];
  }
  if (!searchText) {
    return items;
  }
  // searchText = searchText.toLocaleLowerCase();

  this.tableFilter.data =  items.filter((x:any) => {
    return JSON.stringify(Object.values(x)).includes(searchText);
  });
}

}
export interface IAccountBalance{
  firstName: string;
  lastName: string;
  age: number;
  balance: number;
  city: string;
  creditCardNumber: string;
  phone: string;
}
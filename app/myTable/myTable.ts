import { Component, Input } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'myTable',
    templateUrl: "myTable.html"
})

export class MyTableComponent {
    
    public _ProductsOriginal: Array<any> = [
        { id: 1, Category:'Category 1', name: "product 1", price: 100 },
        { id: 2, Category:'Category 2', name: "product 1", price: 200 },
        { id: 3, Category:'Category 3', name: "product 1", price: 300 },
        { id: 4, Category:'Category 1',name: "product 1", price: 400 },
        { id: 5, Category:'Category 2',name: "product 1", price: 500 },
        { id: 6, Category:'Category 3',name: "product 1", price: 600 },
        { id: 7, Category:'Category 1',name: "product 1", price: 700 },
        { id: 8, Category:'Category 2',name: "product 1", price: 800 },
        { id: 9, Category:'Category 3',name: "product 1", price: 900 },
        { id: 10,Category:'Category 1',name: "product 1", price: 1000 }
    ];

    public _Products: Array<any> = Object.assign([], this._ProductsOriginal);
    

    @Input()
    rows: number = 10;

    get Products(): any {
        //this._Products.length = this.rows
        return this._Products;
    }
    
    remove (value:object):void {
            console.log(value);
    }

    onChangeSelect(value){
        console.log(value); 
        if(value=='all') {
            this._Products= Object.assign([], this._ProductsOriginal);
            return;
        }
        let filter= this._ProductsOriginal.filter(function(name){
            if(name.Category==value){
                return name ; 
            }
        })
        this._Products=filter;
    }

    constructor(){ this.log(`constructor`); }
    ngOnInit() { this.log(`onInit`); }
 
    ngOnDestroy() { this.log(`onDestroy`); }
 
    private log(msg: string) {
        console.log(msg);
    }

}
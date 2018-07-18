import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() childInput: string
  @Output() childUpdateOutput = new EventEmitter<string>();
  @Output() childAddOutput = new EventEmitter<object>();

  childData = {
    name: '',
    itemId: '',
    itemName: '',
    itemDesc: ''
  };

  constructor() { }

  ngOnInit() {
    // can only set the parent name to the child data here
    this.childData.name = this.childInput;
  }

  childLocalUpdate() {
    console.log('Called childLocalUpdate');
    this.childUpdateOutput.emit(this.childData.name);
  }

  childLocalAdd() {
    console.log('Called childLocalAdd');

    let data = {
      id: this.childData.itemId,
      name: this.childData.itemName,
      desc: this.childData.itemDesc
    };

    this.childAddOutput.emit(data);

    this.childData.itemId = '';
    this.childData.itemName = '';
    this.childData.itemDesc = '';
  }

  childLocalEditParentItem(id, name, desc) {
    this.childData.itemId = id;
    this.childData.itemName = name;
    this.childData.itemDesc = desc;
  }
}

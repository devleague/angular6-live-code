import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  parentData = {
    name: 'parent',
    currentId: 2,
    items: [
      { id: 1, name: 'first', desc: 'description' }
    ]
  }

  @ViewChild('childComponent') child;

  constructor() { }

  parentUpdateName(newParentName: string) {
    console.log('Called parentUpdateName:', newParentName);

    this.parentData.name = newParentName;
  }

  parentAddItem(newItem) {
    console.log('Called parentAddItem:', newItem);

    // id exists, so edit item
    if (newItem.id) {
      this.parentData.items.map((item) => {
        if (item.id === newItem.id) {
          item.name = newItem.name;
          item.desc = newItem.desc;
        }
      });
    }
    // no id, so create new item
    else {
      let item = {
        id: this.parentData.currentId++,
        name: newItem.name,
        desc: newItem.desc
      };

      this.parentData.items.push(item);
    }
  }

  parentEditItem(itemId) {
    let item;

    this.parentData.items.map((currentItem) => {
      if (currentItem.id === itemId) { item = currentItem}
    });

    if (item) {
      this.child.childLocalEditParentItem(item.id, item.name, item.desc);
    }
  }
}

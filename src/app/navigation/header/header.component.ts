import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() SideNavigationToggle = new EventEmitter ();
  //Output相当于指令的方法绑定，子作用域触发事件执行响应函数，而响应函数方法体则位于父作用域中，相当于将事件“输出到”父作用域中，在父作用域中处理。

  constructor() { }

  ngOnInit() {
  }

   onToggleOpenSidenav() {
    this.SideNavigationToggle.emit();
  }

}

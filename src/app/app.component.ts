import { Component, OnInit, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app',
  // encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor(
  ){}

  menuObject: any;
  menuArray: any;
  tabu: any;
  eventBus = new EventEmitter();
  systemNotify: string;

  ngOnInit() {
    let amountOfTabs =  (typeof Number(localStorage.getItem('all_tabs')) =="number" && !isNaN(Number(localStorage.getItem('all_tabs')))) ? Number(localStorage.getItem('all_tabs')) + 1 : 1;

    this.setTabNumberInSessionStorage();
    localStorage.setItem('all_tabs', amountOfTabs.toString());

    //check if channel's identifier does not exist
    if (!localStorage.getItem('our_channel')) {
      let uuid = this.generateUUID();

      localStorage.setItem('our_channel', uuid);
    }

    //for tab's clousing, refreshig, e.t.c.
    window.addEventListener('unload', this.onPageUnload, false);

    this.changeTabHandler(this.tabu);
  };


  onPageUnload() {
    console.log('unload test!');
    //remove this tab from all tabs in localStorage
    let amountOfTabs = (Number(localStorage.getItem('all_tabs')) > 0 ) ? Number(localStorage.getItem('all_tabs')) - 1 : 0;

    localStorage.setItem('all_tabs', amountOfTabs.toString() + '@' + sessionStorage.getItem('my_number'));
  };

  changeTabHandler(tab: string) {
    this.tabu = tab;
    window.scrollTo(0, 0);
  };

  navigateSidebar() {
    window.scrollTo(0, 0);
  };

  //for tabs' communication
  setTabNumberInSessionStorage() {
    let tubNumber =  (typeof Number(localStorage.getItem('all_tabs')) =="number" && !isNaN(Number(localStorage.getItem('all_tabs')))) ? Number(localStorage.getItem('all_tabs')) + 1 : 1;

    sessionStorage.setItem('my_number', tubNumber.toString());
  };
  //uuid generator
  generateUUID() {
    let d = new Date().getTime();

    if (window.performance && typeof window.performance.now === "function") {
      d += performance.now(); //use high-precision timer if available
    }

    let  uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      let r = (d + Math.random()*16)%16 | 0;
      d = Math.floor(d/16);

      return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });

    return uuid;
  };
  //initiate socket.io connection


  close() {
    this.systemNotify = '';
  };


}

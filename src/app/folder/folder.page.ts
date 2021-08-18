import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonInfiniteScroll, IonTabs, NavController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  users = [];
  page = 0;
  maximumPages = 3;
  selectedTab:any;

  @ViewChild('tabs',{static: false}) tabs: IonTabs;

    constructor(private activatedRoute: ActivatedRoute,public navCtrl: NavController, private httpClient: HttpClient) { 
      this.loadUsers();
  }
 

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    
  }
  setCurrentTabs(){
    this.selectedTab=this.tabs.getSelected();
  }
  loadUsers(infiniteScroll?) {
    this.httpClient.get(`https://randomuser.me/api/?results=20&page=${this.page}`)
    .subscribe(res => {
      this.users = this.users.concat(res['results']);
      if (infiniteScroll) {
        infiniteScroll.target.complete();
      }
    })
  }
 
  loadMore(infiniteScroll) {
    this.page++;
    this.loadUsers(infiniteScroll);
 
  }


}
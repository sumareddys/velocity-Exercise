import { Component, OnInit} from '@angular/core';
import { AppService } from "./app.service";
import { People } from './people';

@Component({
selector:'app-root',
templateUrl:'./app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';
  arrPeople: string [];
  peopleDetails:any = [];
  blackStar;
  whiteStar;
  likesNum;
  dislikesNum;
  totalRows;
  public show:boolean = false;
   constructor(private AppService: AppService) {
   }
   ngOnInit() {
      this.AppService.getUsers().subscribe(
        data => {
          this.arrPeople = data as string []; // FILL THE ARRAY WITH DATA.
          this.peopleDetails=this.arrPeople[0];
          this.blackStar = this.peopleDetails.rating;
          this.whiteStar = 5 - parseInt(this.blackStar);
          this.likesNum = this.peopleDetails.Likes.length;
          this.dislikesNum = this.peopleDetails.Dislikes.length;
          this.totalRows = (this.likesNum >= this.dislikesNum)?this.likesNum:this.dislikesNum;
          this.show =  true;
        },
        err => console.error(err),
        () => console.log('getting people name')
        );

   }
   viewPerson(people){
      this.peopleDetails = people;
      this.blackStar = this.peopleDetails.rating;
      this.whiteStar = 5 - parseInt(this.blackStar);
      this.likesNum = this.peopleDetails.Likes.length;
      this.dislikesNum = this.peopleDetails.Dislikes.length;
      this.totalRows = (this.likesNum >= this.dislikesNum)?this.likesNum:this.dislikesNum;
      this.show =  true;
   }
   getNumber = function(num) {
    return new Array(num);
    }
}

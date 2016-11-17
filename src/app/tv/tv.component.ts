import { Component } from '@angular/core';
import {TvService} from "./tv.service";
import {Router} from "@angular/router";

@Component({
  selector: 'ml-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['../movies/movies.component.css']
})
export class TvComponent {

  popularList: Array<Object>;
  popularList2: Array<Object>;

  onNavigate(tvshow){
    this.router.navigate(['/tv/'+tvshow.id]);
  }

  constructor(private tvService: TvService, private router: Router) {
    this.tvService.getPopular(1).subscribe(res => {
      this.popularList = res.results;
    });
    this.tvService.getPopular(2).subscribe(res => {
      this.popularList2 = res.results;
    });
  }

}

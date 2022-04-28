import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokedexService } from '../services/pokedex.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  details: any;
  slideOpts = {
    autoplay: {
      delay: 1000,
      disableOnInteraction: false
    }
  };
  constructor(private route: ActivatedRoute, private pokeService: PokedexService) { }

  ngOnInit() {
    let index = this.route.snapshot.paramMap.get('index');
    this.pokeService.getPokemonDetails(index).subscribe(details => {
      this.details = details;
      this.details.images.length = this.details.images.length-2;
      console.log(this.details);
    })
  }

}

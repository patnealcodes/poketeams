import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pt-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public selectedPokemon: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.selectedPokemon = this.route.snapshot.paramMap.get('id');
  }

}

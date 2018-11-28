import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'pt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(this.POKEAPI_BASE_URL).subscribe(
      res => {
        console.log('PokeAPI data successfully retrieved.');
      },
      err => {
        console.error('Error retrieving PokeAPI data.', err);
      }
    );
  }
}

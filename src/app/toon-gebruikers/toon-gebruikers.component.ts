import { Component, OnInit } from '@angular/core';
import { GebruikersService } from './toon-gebruikers.service';
import { Gebruiker } from 'src/shared/models/gebruiker';

@Component({
  selector: 'app-toon-gebruikers',
  templateUrl: './toon-gebruikers.component.html',
  styleUrls: ['./toon-gebruikers.component.css']
})
export class ToonGebruikersComponent implements OnInit {
  //Zorg ervoor dat het type dat je kiest in de service exact overeenkomt met het type dat je hier instantieert.
  //Doe je dit verkeerd krijg je volgende error:
  //Type 'Gebruiker' is missing the following properties from type 'Gebruiker[]': length, pop, push, concat, and 26 more.
  gebruikers: Gebruiker[] = [];

  constructor(
    private gebruikersService: GebruikersService
  ) {}

  ngOnInit() {
    console.log('hier');
    this.gebruikersService.getGebruikers().subscribe(res => {
      this.gebruikers = res;
    });

    console.log(this.gebruikers);

  }

}

import { Component, OnInit } from '@angular/core';
import { GebruikersService } from './toon-gebruikers.service';
import { Gebruiker } from 'src/shared/models/gebruiker';

@Component({
  selector: 'app-toon-gebruikers',
  templateUrl: './toon-gebruikers.component.html',
  styleUrls: ['./toon-gebruikers.component.css']
})
export class ToonGebruikersComponent implements OnInit {
  //gebruiker: Gebruiker;
  gebruiker2: Gebruiker;

  constructor(
    private gebruikersService: GebruikersService
  ) { 

  }

  ngOnInit() {
    console.log('hier');
    /*this.gebruikersService.getGebruikers().subscribe(gebruikerLijst => {
      this.gebruiker._id = gebruikerLijst._id;
      this.gebruiker.achternaam = gebruikerLijst.achternaam;
      this.gebruiker.voornaam = gebruikerLijst.voornaam;
    });*/
    let gebruiker2: Gebruiker = new Gebruiker();
    
    gebruiker2.voornaam = "test";
    gebruiker2.achternaam = "test";

    //console.log(this.gebruiker);
    console.log(gebruiker2);
  }

}

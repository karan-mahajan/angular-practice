import { OnInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'countries';
  public countries: any = [{ conName: 'INDIA' }];
  public country = '';
  public editCountry = '';
  public editVal = '';
  public editMode: boolean = false;
  public i: Number = 0;
  ngOnInit() {
    this.i = this.countries.length;
  }
  addCountry() {
    if (this.country) {
      let newObject = {
        conName: this.country,
      };
      this.countries.push(newObject);
      this.country = '';
      this.i = this.countries.length;
      console.log('Country Added');
    }
  }
  deleteCountry(valueCon: any) {
    this.countries.splice(valueCon, 1);
    this.i = this.countries.length;
    console.log(valueCon);
  }
  editCountry1(val: any) {
    this.editVal = val;
    this.editMode = true;
    this.editCountry = this.countries[val].conName;
    console.log('1');
  }
  countryEdited() {
    this.countries[this.editVal].conName = this.editCountry;
    this.editMode = false;
    console.log('EDITED');
  }
}

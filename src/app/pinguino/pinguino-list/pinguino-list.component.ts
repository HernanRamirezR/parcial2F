import { Component, OnInit } from '@angular/core';
import { Pinguino } from '../pinguino';
import { PinguinoService } from '../pinguino.service';

@Component({
  selector: 'app-pinguino-list',
  templateUrl: './pinguino-list.component.html',
  styleUrls: ['./pinguino-list.component.css']
})
export class PinguinoListComponent implements OnInit {

  pinguinos: Array<Pinguino> = [];
  
  selectedPinguino!: Pinguino;
  selected: Boolean = false;
  speciesWithWidestDistribution!: Pinguino | null;

  constructor(private pinguinoService: PinguinoService) { }


  getPinguinos(): void {
    this.pinguinoService.getPinguinos().subscribe((pinguinos) => {
      this.pinguinos = pinguinos;
    });
  }


  ngOnInit() {
    this.getPinguinos();
  }

  onSelected(pinguino: Pinguino): void {
    this.selected = true;
    this.selectedPinguino = pinguino;
  }

  getMayorDistribucion(): void {
    if (this.pinguinos.length > 0) {
      this.speciesWithWidestDistribution = this.pinguinos.reduce((prev, current) =>
        (prev.global_distribution.length > current.global_distribution.length) ? prev : current
      );
    } else {
      this.speciesWithWidestDistribution = null;
    }
  }
  
}

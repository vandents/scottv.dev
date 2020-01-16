import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { AlgorithmService } from '@app/services/algorithm-service/algorithm.service';


enum Algos {
  quick = 0,
  bubble,
  selection
}


/**
 * A neat component that displays different algorithms sorting variable-sized lists in real time
 */
@Component({
  selector: 'app-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.css']
})
export class AlgorithmsComponent implements OnInit, AfterViewInit {
  @ViewChild('chart', { static: true }) chartRef: ElementRef;
  algos: Array<{ name: string, kind: Algos }>;
  selectedAlgo: { name: string, kind: Algos };
  array: Array<number>;
  numElements: number;


  constructor(
    private snackbar: MatSnackBar,
    public algoServ: AlgorithmService
  ) {
    this.algos = [
      { name: 'Quick Sort', kind: Algos.quick },
      { name: 'Bubble Sort', kind: Algos.bubble },
      { name: 'Selection Sort', kind: Algos.selection }
    ];
    this.selectedAlgo = this.algos[0];
  }


  ngOnInit() {
    this.algoServ.setChartRef(this.chartRef);
  }

  /**
   * Delay a little bit to make sure everything is
   * initialized before we manipulate the DOM
   */
  ngAfterViewInit() {
    setTimeout(() => {
      this.algoServ.randomize();
    }, 5);
  }


  /** Handles sorting via different  */
  async onSort() {
    this.algoServ.setProcessing(true);

    switch (this.selectedAlgo.kind) {
      case Algos.quick:
        await this.algoServ.quickSort().then(val => {
          if (val[0] && val[0] === -1) this.snackbar.open('Sort paused', '', { duration: 2500 });
          this.algoServ.setProcessing(false);
          this.snackbar.open('Sort complete', '', { duration: 2500 });
        });
        break;

      case Algos.bubble:
        this.algoServ.bubbleSort();
        break;

      case Algos.selection:
        this.algoServ.selectionSort();
        break;

      default:
        this.snackbar.open('Something went wrong', '', { duration: 3000 });
        break;
    }
  }

  /** Generates data for the Number of Elements dropdown */
  getArray(size: number, step: number): Array<number> {
    return [...Array(size).keys()].map(i => (i + 1) * step);
  }

  /**
   * Sets the users selected algorithm
   * @param kind An algorithm
   */
  setAlgo(algo: { name: string, kind: Algos }) {
    this.selectedAlgo = algo;
  }

}

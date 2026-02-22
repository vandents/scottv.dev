import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { AlgorithmService, Algos } from '@services/algorithm-service/algorithm.service';
import { Title } from '@angular/platform-browser';
import { BrowserService } from '@services/browser-service/browser.service';
import { Subscription } from 'rxjs';


/**
 * A neat component for displaying various sorting algorithms in real time
 */
@Component({
  standalone: false,
  selector: 'app-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.scss']
})
export class AlgorithmsComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('chart', { static: true }) chartRef: ElementRef;
  algorithms: Array<{ name: string, kind: Algos }>;
  selectedAlgo: { name: string, kind: Algos };
  algos: typeof Algos;
  numElements: number;
  private widthSub: Subscription;
  private sortCompleteSub: Subscription;


  constructor(
    public algoServ: AlgorithmService,
    private title: Title,
    private browser: BrowserService,
    private cdr: ChangeDetectorRef
  ) {
    this.title.setTitle('Scott VandenToorn - Algorithms');
    this.algorithms = algoServ.getAlgorithms();
    this.selectedAlgo = this.algorithms[0];
    this.algos = Algos;
    this.numElements = this.browser.isScreen500() ? 250 : 100;
    this.algoServ.setNumElements(this.numElements);
  }

  ngOnInit() {
    // Pass element ref
    this.algoServ.setChartRef(this.chartRef);

    this.widthSub = this.browser.widthChanges.subscribe((width: number) => {
      if (width <= 500) this.numElements = this.numElements > 150 ? 100 : this.numElements;
    });

    this.sortCompleteSub = this.algoServ.sortComplete$.subscribe(() => {
      this.cdr.detectChanges();
    });
  }

  ngAfterViewInit() {
    // Delay a little bit to make sure everything is
    // initialized before we manipulate the DOM
    setTimeout(() => {
      this.algoServ.randomize();
    });
  }

  ngOnDestroy() {
    this.widthSub.unsubscribe();
    this.sortCompleteSub.unsubscribe();
  }


  /** Generates data for the Number of Elements dropdown */
  getArray(size: number, step: number): Array<number> {
    if (!this.browser.isScreen500()) size = 3;
    return [...Array(size).keys()].map(i => (i + 1) * step);
  }

  /**
   * Sets the users selected algorithm
   * @param kind An algorithm
   */
  setAlgo(algo: { name: string, kind: Algos }) {
    this.selectedAlgo = algo;
    if (this.selectedAlgo.kind === Algos.Bubble || this.selectedAlgo.kind === Algos.Insertion) {
      this.algoServ.setNumElements(50);
      this.numElements = 50;
    }
  }

}

import { Injectable, ElementRef, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject, Subscription } from 'rxjs';
import { BrowserService } from '@services/browser-service/browser.service';
import { ThemeService } from '@services/theme-service/theme.service';


/** The different sorting algorithms */
export enum Algos {
  Quick = 0,
  Selection,
  Insertion,
  Bubble,
  Count
}


/** Meat and potatoes for the interactive sorting algorithms */
@Injectable({
  providedIn: 'root'
})
export class AlgorithmService implements OnDestroy {
  /** Reference the chart so we can manipulate its contents */
  private chartRef: ElementRef;
  /** Array of elements we'll sort through */
  private array: Array<number>;
  /** Number of elements being sorted through */
  private numElements: number;
  /** The time that the delay() method will delay for, in milliseconds */
  private delayTime: number;
  /** True if the algorithm is currently processing */
  private _isProcessing: boolean;
  /** True if the contents of the chart are currently sorted */
  private _isSorted: boolean;
  /** Index of the bar that should be red */
  private redIdx = -1;
  /** Index of the bar that should be green */
  private greenIDX = -1;
  /** Subscribes to changes in the browser width */
  private widthSub: Subscription;
  /** Emits after a sort completes and values are reset */
  public sortComplete$ = new Subject<void>();


  constructor(
    private snackbar: MatSnackBar,
    private browser: BrowserService,
    private themeService: ThemeService
  ) {
    this.numElements = 250;
    this.delayTime = 1;
    this._isProcessing = false;
    this._isSorted = false;
    this.generateNewArray();

    this.widthSub = this.browser.widthChanges.subscribe((width: any) => {
      if (!this._isProcessing)
        setTimeout(() => this.updateChart());
    });
  }

  ngOnDestroy() {
    this.widthSub.unsubscribe();
  }


  /**
   * Runs a given sorting algorithm
   * @param algoKind Kind of the algorithm to be executed
   */
  public onSort(algoKind: Algos) {
    this._isProcessing = true;
    this.setAppropriateDelay(algoKind);

    switch (algoKind) {
      case Algos.Quick:
        this.quickSort().then(val => {
          this.redIdx = -1;
          this.greenIDX = -1;
          this.updateChart();
          this._isProcessing = false;
          this._isSorted = true;
          this.sortComplete$.next();
        });
        break;

      case Algos.Selection:
        this.selectionSort().then(() => {
          this._isSorted = true;
        });
        break;

      case Algos.Insertion:
        this.insertionSort();
        break;

      case Algos.Bubble:
        this.bubbleSort();
        break;

      case Algos.Count:
        this.countSourt(0, 400);
        break;

      default:
        this.snackbar.open('Something went wrong', '', { duration: 3000 });
        this._isProcessing = false;
        break;
    }
  }


  /**********************************************************
   * Setters
   **********************************************************/

  setNumElements(numElements: number) {
    this.numElements = numElements;
  }

  setChartRef(chartRef: ElementRef) {
    this.chartRef = chartRef;
  }

  setDelay(i: number) {
    this.delayTime = i;
  }


  /**********************************************************
   * Getters
   **********************************************************/

  isProcessing(): boolean {
    return this._isProcessing;
  }

  isSorted(): boolean {
    return this._isSorted;
  }

  getDelay(): number {
    return this.delayTime;
  }

  getAlgorithms(): Array<{ name: string, kind: Algos }> {
    return [
      { name: 'Quick Sort',     kind: Algos.Quick     },
      { name: 'Selection Sort', kind: Algos.Selection },
      { name: 'Insertion Sort', kind: Algos.Insertion },
      { name: 'Bubble Sort',    kind: Algos.Bubble    },
      { name: 'Count Sort',     kind: Algos.Count     }
    ];
  }


  /**********************************************************
   * Rendering
   **********************************************************/

  /** Re-renders every bar in the chart based on its value (height) */
  private updateChart() {
    let innerHTML = '';
    this.chartRef.nativeElement.innerHTML = '';
    let idx = 0;
    for (const i of this.array) {
      innerHTML += `
        <div style="width: ${this.getElementWidth()}; height: ${this.getElementHeight(i)}; float: left;
          background-color: ${this.getBackgroundColor(idx)}; border: 0.1px solid #303030;"></div>
      `;
      idx++;
    }
    this.chartRef.nativeElement.innerHTML = innerHTML;
  }

  /** @return Chart width / # elements */
  private getElementWidth(): string {
    return `${this.chartRef.nativeElement.offsetWidth / this.numElements}px`;
  }

  /** @return Since the range of i is 100, i is returned for height in percentage */
  private getElementHeight(i: number): string {
    return `${i / 4}%`;
  }

  /** @return Background color for each bar */
  getBackgroundColor(index: number): string {
    if (this.redIdx === index) return this.themeService.isLight() ? 'rgb(245, 49, 127)' : 'rgb(190, 54, 54)';
    if (this.greenIDX === index) return this.themeService.isLight() ? 'rgb(76, 235, 59)' : 'rgb(20, 135, 72)';
    return this.themeService.isLight() ? 'rgb(60, 80, 115)' : 'rgb(215, 183, 180)';
  }


  /**********************************************************
   * Helper Methods
   **********************************************************/

  /** Generates a new random array and updates the chart */
  public randomize() {
    if (!this._isProcessing) {
      this.generateNewArray();
      this.updateChart();
      this._isSorted = false;
    }
  }

  /**
   * A method will be halted for some time when it waits on delay()
   * @example await this.delay()
   */
  private async delay(): Promise<void> {
    if (this.delayTime === 0) return Promise.resolve();
    return new Promise<void>(resolve => {
      setTimeout(resolve, this.delayTime);
    });
  }

  /**
   * Generates new array with random integers between 1 and 99,
   * then populates the instance variable array
   */
  private generateNewArray() {
    this.array = [];
    for (let i = 0; i < this.numElements; i++) {
      this.array.push(this.getRandInt(400) + 1);
    }
  }

  /**
   * @param max Max val for range (exclusive)
   * @return Random integer between 0 and max
   */
  private getRandInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  /**
   * Decides the appropriate delay for the algorithm and # elements
   * @param algoKind The algorithms kind
   */
  private setAppropriateDelay(algoKind: Algos) {
    switch (algoKind) {
      case Algos.Quick:
        if (this.numElements === 50) this.setDelay(100);
        else if (this.numElements === 100 || this.numElements === 150) this.setDelay(25);
        else if (this.numElements <= 300) this.setDelay(10);
        else this.setDelay(0.001);
        break;

      case Algos.Count:
      case Algos.Selection:
        if (this.numElements === 50) this.setDelay(100);
        else if (this.numElements === 100) this.setDelay(50);
        else if (this.numElements <= 200) this.setDelay(25);
        else if (this.numElements <= 300) this.setDelay(10);
        else this.setDelay(5);
        break;

      case Algos.Insertion:
      case Algos.Bubble:
        this.setDelay(15);
        break;

      default:
        this.snackbar.open('Something went wrong when setting delay', '', { duration: 3000 });
        break;
    }
  }

  /**
   * Called at the end of various sorting algorithms.
   * Resets various values and updates the DOM one final time.
   */
  resetSortVals() {
    this._isProcessing = false;
    this._isSorted = true;
    this.redIdx = -1;
    this.greenIDX = -1;

    this.updateChart();
    this.sortComplete$.next();
  }


  /**************************************************************************************************
   * Algorithms
   **************************************************************************************************/

  /**********************************************************
   * Quick Sort
   **********************************************************/

  /** Quicksort algorithm */
  private async quickSort(array: Array<number> = this.array, left: number = 0, right: number = array.length - 1): Promise<Array<number>> {
    let index: number;
    this.array = array;

    if (array.length > 1) {
      index = await this.partition(array, left, right);
      if (left < index - 1) await this.quickSort(array, left, index - 1);
      if (index < right) await this.quickSort(array, index, right);
    }

    this.array = array;
    return array;
  }

  /** Split array and swap values */
  private async partition(array: Array<number>, left: number = 0, right: number = array.length - 1): Promise<number> {
    const pivot = array[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;

    while (i <= j) {
      while (array[i] < pivot) i++;
      while (array[j] > pivot) j--;

      if (i <= j) {
        [array[i], array[j]] = [array[j], array[i]];
        i++;
        j--;
        this.redIdx = i;
        this.greenIDX = j;
        this.updateChart();
        await this.delay();
      }
    }

    return Promise.resolve(i);
  }


  /**********************************************************
   * Selection Sort
   **********************************************************/

  /** Selection sort algorithm */
  private async selectionSort() {
    for (let i = 0; i < this.array.length; i++) {
      let minAt = i;

      for (let j = i + 1; j < this.array.length; j++) {
        if (this.array[j] < this.array[minAt]) minAt = j;
      }

      if (minAt !== i) {
        const temp = this.array[i];
        this.array[i] = this.array[minAt];
        this.array[minAt] = temp;
        this.redIdx = i;
        this.greenIDX = minAt;
        this.updateChart();
        await this.delay();
      }
    }

    this.resetSortVals();
  }


  /**********************************************************
   * Insertion Sort
   **********************************************************/

  /** Insertion sort algorithm */
  async insertionSort() {
    for (let i = 0; i < this.array.length; i++) {
      const k = this.array[i];
      let j: number;

      this.greenIDX = i;
      this.redIdx = i - 1;
      this.updateChart();
      await this.delay();
      await this.delay();
      await this.delay();

      for (j = i; j > 0 && k < this.array[j - 1]; j--) {
        this.array[j] = this.array[j - 1];

        this.redIdx = i;
        this.greenIDX = j;
        this.updateChart();
        await this.delay();
      }

      this.array[j] = k;
    }

    this.resetSortVals();
  }


  /**********************************************************
   * Bubble Sort
   **********************************************************/

  /** Bubble sort algorithm */
  private async bubbleSort(array: Array<number> = this.array) {
    let done = false;
    while (!done) {
      done = true;
      for (let i = 1; i < array.length; i++) {
        this.greenIDX = i;
        if (array[i - 1] > array[i]) {
          done = false;
          [array[i - 1], array[i]] = [array[i], array[i - 1]];
          this.redIdx = i - 1;
          this.updateChart();
          await this.delay();
        }
      }
    }

    this.resetSortVals();
  }


  /**********************************************************
   * Count Sort
   **********************************************************/

  /** Count sort algorithm */
  async countSourt(min: number, max: number) {
    let z = 0;
    const count = [];

    // Initialize array
    for (let i = min; i <= max; i++) count[i] = 0;

    for (const i of this.array) {
      count[i]++;

      this.redIdx++;
      this.updateChart();
      await this.delay();
    }

    this.redIdx = -1;

    for (let i = min; i <= max; i++) {
      while (count[i]-- > 0) {
        this.array[z++] = i;

        this.greenIDX = z;
        this.updateChart();
        await this.delay();
      }
    }

    this.resetSortVals();
  }

}

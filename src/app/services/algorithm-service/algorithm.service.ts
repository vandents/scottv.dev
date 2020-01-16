import { Injectable, ElementRef } from '@angular/core';
import { BrowserService } from '../browser-service/browser.service';


enum Algos {
  quick = 0,
  bubble
}


@Injectable({
  providedIn: 'root'
})
export class AlgorithmService {
  private chartRef: ElementRef;
  private array: Array<number>;
  private numElements: number;
  private delayTime: number;
  private processing: boolean;


  constructor(private browser: BrowserService) {
    this.numElements = 100;
    this.delayTime = 5;
    this.processing = false;
    this.generateNewArray();
  }


  /**********************************************************
   * Quick Sort
   **********************************************************/

  /**
   * Quicksort implementation
   *
   * @param {Array<number>} array
   * @param {number} [left=0]
   * @param {number} [right=array.length - 1]
   * @returns {Array<number>}
   */
  async quickSort(array: Array<number> = this.array, left: number = 0, right: number = array.length - 1): Promise<Array<number>> {
    let index: number;
    this.array = array;

    this.updateChart();
    await this.delay();

    if (array.length > 1) {
      index = await this.partition(array, left, right);
      if (left < index - 1) await this.quickSort(array, left, index - 1);
      if (index < right) await this.quickSort(array, index, right);
    }

    this.array = array;
    return array;
  }

  /**
   * Split array and swap values
   *
   * @param {Array<number>} array
   * @param {number} [left=0]
   * @param {number} [right=array.length - 1]
   * @returns {number}
   */
  async partition(array: Array<number>, left: number = 0, right: number = array.length - 1): Promise<number> {
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
        this.updateChart();
        await this.delay();
      }
    }

    return Promise.resolve(i);
  }


  /**********************************************************
   * Bubble Sort
   **********************************************************/

  /** Bubble sort algorithm */
  async bubbleSort(array: Array<number> = this.array) {
    let done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < array.length; i++) {
        if (array[i-1] > array[i]) {
          done = false;
          [array[i-1], array[i]] = [array[i], array[i-1]];
          this.updateChart();
          await this.delay();
        }
      }
    }
    this.processing = false;
    this.updateChart();
    return array;
  }


  /**********************************************************
   * Selection Sort
   **********************************************************/

  /** Selection sort algorithm */
  async selectionSort(array: Array<number> = this.array) {
    for (let i = 0; i < array.length; i++) {
      let minAt = i;

      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[minAt]) minAt = j;
      }
   
      if (minAt !== i) {
        let temp = array[i];
        array[i] = array[minAt];
        array[minAt] = temp;
        this.updateChart();
        await this.delay();
      }
    }

    this.processing = false;
    return array;
  }


  /**********************************************************
   * Rendering
   **********************************************************/

  /** Re-renders each bar in the chart based on its value (height) */
  updateChart() {
    let innerHTML = '';
    this.chartRef.nativeElement.innerHTML = '';
    for (let i of this.array) {
      innerHTML += `
        <div style="width: ${this.getElementWidth()};
        height: ${this.getElementHeight(i)}; border: ${this.getElementBorder()};
        background-color: rgb(216, 250, 247); float: left;">
          ${this.getElementNumber(i)}
        </div>
      `;
    }
    this.chartRef.nativeElement.innerHTML = innerHTML;
  }

  /** @return The little number above each bar */
  private getElementNumber(i: number): string {
    if (this.numElements > 150 || !this.browser.isScreen992()) return '';
    return `
      <div style="width: ${this.getElementWidth()}; transform: rotate(270deg);
      transform-origin: left top 0; font-size: 8px; margin-left: -2px;">&nbsp;${i}</div>
    `;
  }

  /** @return Chart width / # elements */
  private getElementWidth(): string {
    return `${this.chartRef.nativeElement.offsetWidth / this.numElements}px`;
  }

  /** @return Since the range of i is 100, i is returned for height in percentage */
  private getElementHeight(i: number): string {
    return `${i}%`;
  }

  /** @return Border styling for a bar in the chart */
  private getElementBorder(): string {
    return this.numElements > 150 ? 'none' : '0.1px solid #6c757d';
  }


  /**********************************************************
   * Helper Methods
   **********************************************************/

  /** Generates a new random array and updates the chart */
  randomize() {
    this.generateNewArray();
    this.updateChart();
  }

  /**
   * A method will be halted for some time when it waits on delay()
   * @example await this.delay()
   */
  async delay(): Promise<void> {
    if (this.delayTime === 0) return Promise.resolve();
    return new Promise<void>(resolve => {
      setTimeout(resolve, this.delayTime - 1);
    });
  }

  /**
   * Generates new array with random integers between 1 and 99,
   * then populates the instance variable array
   */
  generateNewArray() {
    this.array = [];
    for (let i = 0; i < this.numElements; i++) {
      this.array.push(this.getRandInt(99) + 1);
    }
  }

  /**
   * @param max Max val for range (exclusive)
   * @return Random integer between 0 and max
   */
  getRandInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
  }


  /**********************************************************
   * Setters
   **********************************************************/

  setNumElements(numElements: number) {
    this.numElements = numElements;
    this.randomize();
  }

  setChartRef(chartRef: ElementRef) {
    this.chartRef = chartRef;
  }

  setDelay(i: number) {
    this.delayTime = i;
  }

  setProcessing(isSorting: boolean) {
    this.processing = isSorting;
  }


  /**********************************************************
   * Getters
   **********************************************************/

  isProcessing(): boolean {
    return this.processing;
  }

  getDelay(): number {
    return this.delayTime;
  }

}

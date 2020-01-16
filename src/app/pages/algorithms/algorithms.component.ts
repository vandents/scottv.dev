import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BrowserService } from '@app/services/browser-service/browser.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.css']
})
export class AlgorithmsComponent implements OnInit {
  @ViewChild('chart', { static: true }) chartRef: ElementRef;
  array: Array<number>;
  numElements: number;
  sortDelay: number;
  isSorting: boolean;
  isPaused: boolean;

  constructor(
    public browser: BrowserService,
    private snackbar: MatSnackBar
  ) {
    this.numElements = 100;
    this.sortDelay = 10;
    this.isSorting = false;
    this.isPaused = false;
  }

  ngOnInit() {
    this.randomize();
  }

  randomize() {
    this.generateNewArray();
    this.updateChart();
  }

  async onSort() {
    this.isSorting = true;
    this.bubbleSort(this.array);
    // await this.quickSort(this.array).then(val => {
    //   if (val[0] && val[0] === -1) this.snackbar.open('Sort paused');
    //   this.isSorting = false;
    //   this.snackbar.open('Sort complete');
    // });
  }

  setNumElements(i: number) {
    this.numElements = i;
    this.generateNewArray();
    this.updateChart();
  }

  setDelay(i: number) {
    this.sortDelay = i;
  }

  getElementWidth(): string {
    return `${this.chartRef.nativeElement.offsetWidth / this.numElements}px`;
  }

  getElementHeight(i: number): string {
    return `${i}%`
  }

  getElementBorder(): string {
    return this.numElements > 150 ? 'none' : '0.1px solid #6c757d';
  }
  
  getElementNumber(i: number) {
    if (this.numElements > 100 || !this.browser.isScreen992()) return '';
    return `
      <div style="width: ${this.getElementWidth()}; transform: rotate(270deg);
      transform-origin: left top 0; font-size: 8px;">&nbsp;${i}</div>
    `;
  }

  updateChart() {
    let innerHTML = '';
    this.chartRef.nativeElement.innerHTML = '';
    for (let i of this.array) {
      innerHTML += `
        <div style="width: ${this.getElementWidth()};
        height: ${this.getElementHeight(i)}; border: ${this.getElementBorder()};
        background-color: rgb(163, 207, 236); float: left;">
          ${this.getElementNumber(i)}
        </div>
      `;
    }
    this.chartRef.nativeElement.innerHTML = innerHTML;
  }

  updateChartAsync() {
    this.updateChart();
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

  /** Generates data for the Number of Elements dropdown */
  getArray(size: number, step: number): Array<number> {
    return [...Array(size).keys()].map(i => (i + 1) * step);
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

    if (this.isPaused) this.pause();
  
    while (i <= j) {
      while (array[i] < pivot) i++;
  
      while (array[j] > pivot) j--;

      if (i <= j) {
        [array[i], array[j]] = [array[j], array[i]];
        i++;
        j--;
        if (this.isPaused) this.pause();
        this.updateChartAsync();
        await this.delay();
      }
    }

    return Promise.resolve(i);
  }

  /**
   * Quicksort implementation
   *
   * @param {Array<number>} array
   * @param {number} [left=0]
   * @param {number} [right=array.length - 1]
   * @returns {Array<number>}
   */
  async quickSort(array: Array<number>, left: number = 0, right: number = array.length - 1): Promise<Array<number>> {
    let index: number;
    this.array = array;

    if (this.isPaused) this.pause();

    this.updateChartAsync();
    await this.delay();

    if (array.length > 1) {
      index = await this.partition(array, left, right);
      if (this.isPaused) this.pause();

      if (left < index - 1) await this.quickSort(array, left, index - 1);
      if (this.isPaused) this.pause();

      if (index < right) await this.quickSort(array, index, right);
      if (this.isPaused) this.pause();
    }

    this.array = array;
    return array;
  }

  async delay(): Promise<void> {
    return new Promise<void>(resolve => {
      setTimeout(resolve, this.sortDelay);
    });
  }

  async bubbleSort(array: Array<number>) {
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
    this.isSorting = false;
    this.updateChart();
    return array;
  }

  pause() {
    if (this.isSorting) {
      setTimeout(() => this.pause(), 50);
      return;
    }
  }

}

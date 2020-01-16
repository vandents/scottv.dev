import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.css']
})
export class AlgorithmsComponent implements OnInit {
  @ViewChild('chart', {  static: true }) chartRef: ElementRef;
  array: Array<number>;
  numElements: number;
  numElementsOptions: Array<number>;


  constructor(private changeDetectorRef: ChangeDetectorRef) {
    this.numElements = 100;
    this.generateNewArray();
    this.numElementsOptions = this.getNumElementsOptions(10, 50);
    console.log('Initial array: ', this.array);
  }

  ngOnInit() {
  }

  onNumElementsChange(i: number) {
    console.log('i: ', i);
    this.numElements = i;
    // this.generateNewArray();
  }

  onSort() {
    this.quickSort(this.array);
  }

  getElementWidth(): string {
    return `${1000 / this.numElements}px`;
  }

  getElementHeight(i: number): string {
    return `${i}%`
  }

  getElementBorder(): string {
    return this.numElements > 150 ? 'none' : '0.1px solid var(--secondary)';
  }

  /**
   * Generates new array with random integers between 1 and 99,
   * then populates the instance variable array
   */
  generateNewArray(e?: any) {
    const array = [];
    for (let i = 0; i < this.numElements; i++) {
      array.push(this.getRandInt(99) + 1);
    }
    this.array = array;
  }

  /**
   * @param max Max val for range (exclusive)
   * @return Random integer between 0 and max
   */
  getRandInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  /** Generates data for the Number of Elements dropdown */
  getNumElementsOptions(size: number, increment: number): Array<number> {
    return [...Array(size).keys()].map(i => (i + 1) * increment);
  }

  /**
   * Split array and swap values
   *
   * @param {Array<number>} array
   * @param {number} [left=0]
   * @param {number} [right=array.length - 1]
   * @returns {number}
   */
  partition(array: Array<number>, left: number = 0, right: number = array.length - 1): number {
    const pivot = array[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;
  
    while (i <= j) {
      while (array[i] < pivot) {
        i++;
      }
  
      while (array[j] > pivot) {
        j--;
      }
  
      if (i <= j) {
        [array[i], array[j]] = [array[j], array[i]];
        i++;
        j--;
      }
    }
  
    return i;
  }

  /**
   * Quicksort implementation
   *
   * @param {Array<number>} array
   * @param {number} [left=0]
   * @param {number} [right=array.length - 1]
   * @returns {Array<number>}
   */
  quickSort(array: Array<number>, left: number = 0, right: number = array.length - 1): Array<number> {
    let index: number;

    if (array.length > 1) {
      index = this.partition(array, left, right);

      if (left < index - 1) {
        this.quickSort(array, left, index - 1);
      }

      if (index < right) {
        this.quickSort(array, index, right);
      }
    }

    // this.array = array;
    // this.changeDetectorRef.detectChanges();
    return array;
  }
}

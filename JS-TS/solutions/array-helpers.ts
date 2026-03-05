/* eslint-disable @typescript-eslint/no-unused-vars */
// Task 02: Mini functional–utility library
// All helpers are declared but not implemented.

export function mapArray<T, R>(source: readonly T[], mapper: (item: T, index: number) => R): R[] {

  if (source == null) {
    throw new TypeError('source is null');
  }

  const resultArray: R[] = [];

  for (let i = 0; i < source.length; i++) {
    resultArray.push(mapper(source[i], i));
  }

  return resultArray;
}

export function filterArray<T>(source: readonly T[], predicate: (item: T, index: number) => boolean): T[] {

  if (source == null) {
    throw new TypeError('source is null');
  }

  const resultArray: T[] = [];

  for (let i = 0; i < source.length; i++) {
    if (predicate(source[i], i))
      resultArray.push(source[i]);
  }

  return resultArray;
}

export function reduceArray<T, R>(source: readonly T[], reducer: (acc: R, item: T, index: number) => R, initial: R): R {
  if (source == null) {
    throw new TypeError('source is null');
  }

  let acc = initial;

  for (let i = 0; i < source.length; i++) {
    acc = reducer(acc, source[i], i);
  }

  return acc;

}

export function partition<T>(source: readonly T[], predicate: (item: T) => boolean): [T[], T[]] {
  if (source == null) {
    throw new TypeError('source is null');
  }

  const passArray: T[] = [];
  const failsArray: T[] = [];

  for (let i = 0; i < source.length; i++) {
    if (predicate(source[i]))
      passArray.push(source[i]);
    else failsArray.push(source[i]);
  }

  return [passArray, failsArray];
}

export function groupBy<T, K extends PropertyKey>(source: readonly T[], keySelector: (item: T) => K): Record<K, T[]> {
  if (source == null) {
    throw new TypeError('source is null');
  }

  const result = {} as Record<K, T[]>;

  for (let i = 0; i < source.length; i++) {
    const key = keySelector(source[i]);
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(source[i]);
  }

  return result;
}

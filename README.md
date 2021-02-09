# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by BettyHoPro as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @betty_ho_dev/lotide`

**Require it:**

`const _ = require('@betty_ho_dev/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
* `assertArraysEqual(actual, expected)`: Takes in two arrays and logs in the console log to see if they are the same. return it is falsy or true.
* `assertEqual(actual, expected)`: Takes in two elements that aren't Objects or arrays to check and return the result of if they are identical. 
* `assertObjectsEqual(actual, expected)`: Takes in two objects and logs in the console log to check and return the result of if they are identical.
* `countLetters(string)`: Takes in a string and returns an object that illustrates the amount of indivisual letter appear.
* `countOnly(allItems, itemsToCount)`: Takes in an array or object and an argument, then illustrates which elements to count, return the result of the amount of time appears for the argument element. 
* `eqArrays(arr1, arr2)`: Takes in two arrays and returns the result if they are identical.
* `eqObjects(obj1, obj2)`: Takes in two objects and returns the first element in the array
* `findKey(obj, callback)`: Takes in an object and loops through the keys and returns the the key we find.
* `findKeyByValues(obj, val)`: Takes in an object and loops through the keys and returns the those keys which are equal with the value we take in the function.
* `flatten(arr)`: Takes in an array with nested arrays, transfer it into a single, flattened array without nested arrays.   
* `head(arr)`: Takes in an array and returns the first element in the array
* `letterPositions(string)`: Takes in a string and returns an object that illustrate the indexes of the indivisual letters appear as key/value pairs.
* `map(array, callback)`: Takes in an array and a callback function, loops through the array replace the elements in the same array once they implement the callback function's methods.
* `middle(arr)`: Takes in an array and return the middle position element in the array.
* `tail(arr)`: Takes in an array, remove the first element in the array and return the array with remaining elements.
* `takeUnit(array, callback)`: Takes in an array and a callback function, loops through the array and implement the each element in the callback function, return the true result element into a new array.
* `without(source, itemsToRemove)`: Takes in two arrays, one is the resource, one is itemsToRemove, loops through the source array to find and remove the same elements in itemsToRemove array, return the resource array with remaining elements.

## Test
Lotide project can use Mocha / Chai Unit Test.
Please run the test `npm run test` in command line within repository directory.
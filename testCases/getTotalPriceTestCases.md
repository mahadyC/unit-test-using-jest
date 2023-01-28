# Test cases

## **getTotalPrice(id)**

Returns the total price of the book including the total price of the extras as number

  - Parameters: id of the book
  - Return: The price of the book including the total price of the extras as number
  - if no book with the given number is found throws an exeption `nothing found with given id`

### Test 1: total price of the book with given id
```js

bookStorage.getTotalPrice(1);
bookStorage.getTotalPrice(2);
bookStorage.getTotalPrice(3);

```
returns 70, 190, 30

### Test 2: found no book with the given id

```js
bookStorage.getTotalPrice(5);
```
throws exception `'nothing found with given id'`
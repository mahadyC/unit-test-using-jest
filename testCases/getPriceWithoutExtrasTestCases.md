# Test cases

## **getPriceWithoutExtras(id)**

Returns the price with out extras as number

  - Parameters: id of the book
  - Return: The price of the book not including the price of the extras as number
  - if no book with the given number is found throws an exeption `nothing found with given id`

### Test 1: found price of the given book id
```js
bookStorage.getPriceWithoutExtras(1);
bookStorage.getPriceWithoutExtras(2);
bookStorage.getPriceWithoutExtras(3);

```
returns 25, 45, 30

### Test 2: found no book with the given id
```js
bookStorage.getPriceWithoutExtras(5);
```
throws exception `'nothing found with given id'`




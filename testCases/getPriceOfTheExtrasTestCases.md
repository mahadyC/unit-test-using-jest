# Test cases

## **getPriceOfTheExtras(id)**

Returns the total price of extras bunled with the book as number
 
  - Parameters: id of the book to be searched
  - Return: the total price of extras. If no extras is found returns 0
  - if no book with the given number is found throws an exeption `nothing found with given id`

### Test 1: total price of extras with given book id
```js

bookStorage.getPriceOfTheExtras(1)
bookStorage.getPriceOfTheExtras(2)


```
returns 45, 145

### Test 2: found no extras with the given id
```js

bookStorage.getPriceOfTheExtras(3)
```
returns 0

### Test 3: found no book with the given id
```js

bookStorage.getPriceOfTheExtras(5)
```
throws exception `'nothing found with given id'`
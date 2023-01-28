# Test cases

## **getAllIdsByName(value)**

Returns all ids of the books matching the value of name
  
  - Parameters: value of the property to be searched
  - Return: Returns an array of book id where the books name matches the given value. If there is no match or parameter is missing, an empty array is returned.
  
### Test 1: found ids of the provided book name
```js
bookStorage.getAllIdsByName("Hacking databases");

```

returns [{bookId: 3}]

### Test 2: no match found with the provided book name
```js
bookStorage.getAllIdsByName("Hacking whatever");

```
returns []

### Test 3: missing parameter
```js
bookStorage.getAllIdsByName();

```
returns []
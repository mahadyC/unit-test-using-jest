# Test cases

## **GetBookTopics(id)**

Returns an array of book topics. If none found, returns an empty array.

  - Parameters: id of the book 
  - Return: returns topics as an array

### Test 1: found topics with given id
```js
bookStorage.getBookTopics(1);
```

returns
```json
["noSql", "sql", "future databases"]
```

### Test 2: no topics found with given id
```js
bookStorage.getBookTopics(3);
```
returns
```json
[]
```

### Test 3: book not found with the given id
```js
bookStorage.getBookTopics(5);
```
returns
```json
[]
```

### Test 4: id parameter missing
```js
bookStorage.getBookTopics();
```
returns
```json
[]
```
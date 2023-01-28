# Test cases

## **hasTopics(id)**
  
- Parameters: id of the book
- Return: returns true if the book has topics else returns false. If parameter id is missing false is returned

### Test 1: book has topics
```js
bookStorage.hasTopics(1);
```
returns 
```json
true
```

### Test 2: book has no topics
```js
bookStorage.hasTopics(3);
```
returns 
```json
false
```

### Test 3: book does not exist
```js
bookStorage.hasTopics(5);
```
returns 
```json
false
```

### Test 4: missing parameter
```js
bookStorage.hasTopics();
```
returns 
```json
false
```
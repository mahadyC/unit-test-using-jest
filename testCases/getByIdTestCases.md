# Test cases

## **getById(id)**

Method searches the datastorage for an object with given key. Key is unique.

  - Parameters: id of the book
  - Return: returns the book object matching the id or null if there is no match
  - if parameter is missing, throws an exception `'parameter missing'`

### Test 1: book found by id
```js

bookStorage.getById(1);
```
returns 
```json
{
    "id": 1,
    "name": "NoSql - New Hope",
    "author": "Layla Jones",
    "topics": ["noSql", "sql", "future databases"],
    "price": 25,
    "extras": [{
        "name": "hard cover",
        "price": 30
      },
      {
        "name": "cd",
        "price": 15
      }
    ]
}
```

### Test 2: book not found by id
```js

bookStorage.getById(5);
```
returns null

### Test 3: missing parameter
```js

bookStorage.getById();
```
throws exception `'parameter missing'`
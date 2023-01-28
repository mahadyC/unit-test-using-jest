# Test cases

## **getAllBooksByAuthor(author)**

Returns an array of book objects of given author

  - Parameters: author of the book to be searched
  - Returns an array of book objects of given author. If no book of given author is found, returns an empty array.
  - If a parameter author is missing, an exeption **'missing parameter'** is thrown.

### Test 1: found book objects of given author from default storage
```js

bookStorage.getAllBooksByAuthor("Emily White");

```
returns 
```json

[
  {
    "id": 3,
    "name": "Hacking databases",
    "author": "Emily White",
    "topics": [],
    "price": 30,
    "extras": []
  }
]

```
#### Test found multiple books from testData storage

```js
const testDataStorage = [
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
  },
  {
    "id": 2,
    "name": "Databases - The rise and fall",
    "author": "Antony Lee",
    "topics": ["data storages", "sql", "noSql"],
    "price": 45,
    "extras": [{
        "name": "signed by author",
        "price": 80
      },
      {
        "name": "dvd",
        "price": 65
      }
    ]
  },
  {
    "id": 3,
    "name": "Hacking databases",
    "author": "Emily White",
    "topics": [],
    "price": 30,
    "extras": []
  },
  {
    "id": 4,
    "name": "Hacking databases for security",
    "author": "Emily White",
    "topics": [],
    "price": 40,
    "extras": []
  }
  
];
const bookStorage = new BookStorage(testDataStorage);
bookStorage.getAllBooksByAuthor("Emily White");

```

returns 

```json

[
  {
    "id": 3,
    "name": "Hacking databases",
    "author": "Emily White",
    "topics": [],
    "price": 30,
    "extras": []
  },
  {
    "id": 4,
    "name": "Hacking databases for security",
    "author": "Emily White",
    "topics": [],
    "price": 40,
    "extras": []
  }
];

```

### Test 2: found no book of this author

```js

bookStorage.getAllBooksByAuthor("Irene Walter");

```

returns

```json
[]
```

#### Test when the given parameter is number
```js

bookStorage.getAllBooksByAuthor(1234);

```

returns

```json
[]
```

### Test 3: missing parameter
```js

bookStorage.getAllBooksByAuthor();

```

throws exception `'parameter missing'`
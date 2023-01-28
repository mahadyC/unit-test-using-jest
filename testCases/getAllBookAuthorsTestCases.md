# Test cases

## **getAllBookAuthors()**

Returns an array of different book authors. 

  - Parameters: none
  - Return: Returns an array of different book authors. If no authors are found, returns an empty array. The author is added to the result array only once.

### Test 1: found authors of all books in the book storage
```js

bookStorage.getAllBookAuthors();

```

returns 
```json
["Layla Jones", "Antony Lee", "Emily White"];

```

### Test 2: name of the author of multiple books is added once
```js
testData = [
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

const bookStorage = new BookStorage(testData);
bookStorage.getAllBookAuthors();

```

returns
```json
["Layla Jones", "Antony Lee", "Emily White"];
```

### Test 3: no authors found
```js

const bookStorage = new BookStorage([]);

bookStorage.getAllBookAuthors();

```

returns 
```json

[]
```

### Test 4: author field is empty
```js
testData = [
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
    "author": "",
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

const bookStorage = new BookStorage(testData);
bookStorage.getAllBookAuthors();
```

returns 
```json

[]
```
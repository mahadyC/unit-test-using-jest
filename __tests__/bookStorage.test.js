'use strict';

const BookStorage = require('../bookStorage');
const data = require('../datastorage.json');

describe('Testing constructor', () =>{
    test('Test 1: missing parameter throws an error', () =>{
        expect(() => new BookStorage()).toThrow(`data storage missing`);
    });
});

describe('Testing method getById(id)', () =>{
    const bookStorage = new BookStorage(data);

    test('Test 1: book found by id', () =>{
        const expected = {
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
        };
        expect(bookStorage.getById(1)).toEqual(expected);
    });

    test('Test 2: book not found by id', () =>{
        expect(bookStorage.getById(5)).toEqual(null);
    });

    test('Test 3: missing parameter', () => {
        expect(() => bookStorage.getById()).toThrow(`parameter missing`);
    });
});

describe('Testing method getAllIdsByName(value)', () =>{
    const bookStorage = new BookStorage(data);

    test('Test 1: found ids of the provided book name', () =>{
        expect(bookStorage.getAllIdsByName('Hacking databases')).toEqual([{bookId: 3}]);
    });

    test('Test 2: no match found with the provided book name', () =>{
        expect(bookStorage.getAllIdsByName('Hacking whatever')).toEqual([]);
    });

    test('Test 3: missing parameter', () =>{
        expect(bookStorage.getAllIdsByName()).toEqual([]);
    });
});

describe('Testing method getAllBookAuthors()', ()=> {
    test('Test 1: found authors of all books in the book storage', ()=>{
        const bookStorage = new BookStorage(data);
        const expected = ["Layla Jones", "Antony Lee", "Emily White"];
        expect(bookStorage.getAllBookAuthors()).toEqual(expected);

    });

    test('Test 2: name of the author of multiple books is added once', () => {
        const testData = [
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
        const expected = ["Layla Jones", "Antony Lee", "Emily White"];

        expect(bookStorage.getAllBookAuthors()).toEqual(expected);
    });

    test('Test 3: no authors found', () => {
        const bookStorage = new BookStorage([]);
        expect(bookStorage.getAllBookAuthors()).toEqual([]);
    });

    test('Test 4: author field is empty', () => {
        const testData = [
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
        
        expect(bookStorage.getAllBookAuthors()).toEqual([]);

    })
});

describe('Testing method getAllBooksByAuthor(authorName)', () =>{
    
    describe('Test 1: found book objects of given author from default storage', () =>{
        test('found one book from default storage', () => {
            const bookStorage = new BookStorage(data);
            const expected = [
                {
                  "id": 3,
                  "name": "Hacking databases",
                  "author": "Emily White",
                  "topics": [],
                  "price": 30,
                  "extras": []
                }
              ];
            expect(bookStorage.getAllBooksByAuthor("Emily White")).toEqual(expected);
        });

        test('found multiple books from testData storage', () =>{
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
            const expected = [
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
            
            expect(bookStorage.getAllBooksByAuthor("Emily White")).toEqual(expected);
        });
    });

    describe('Test 2: found no book of this author', () => {
        const bookStorage = new BookStorage(data);

        test('string parameter given', () => {
            expect(bookStorage.getAllBooksByAuthor("Irene Walter")).toEqual([]);
        });

        test('number parameter given', () => {
            expect(bookStorage.getAllBooksByAuthor(1234)).toEqual([]);
        });
    });

    describe('Test 3: missing parameter', () => {
        test('missing parameter', () =>{
            const bookStorage = new BookStorage(data);
            expect(() => bookStorage.getAllBooksByAuthor()).toThrow('parameter missing');
        });
    });
});

describe('Testing method hasTopics(id)', ()=>{
    const bookStorage = new BookStorage(data);
    test('Test 1: book has topics', ()=>{
        expect(bookStorage.hasTopics(1)).toEqual(true);
    });

    test('Test 2: book has no topics', ()=>{
        expect(bookStorage.hasTopics(3)).toEqual(false);
    });

    test('Test 3: book does not exist', ()=>{
        expect(bookStorage.hasTopics(5)).toEqual(false);
    });

    test('Test 4: missing parameter', ()=>{
        expect(bookStorage.hasTopics()).toEqual(false);
    });
});

describe('Testing method getBookTopics(id)',()=>{
    const bookStorage = new BookStorage(data);

    test('Test 1: found topics with given id', ()=>{
        const expected = ["noSql", "sql", "future databases"];
        expect(bookStorage.getBookTopics(1)).toEqual(expected);
    });

    test('Test 2: no topics found with given id', ()=>{
        expect(bookStorage.getBookTopics(3)).toEqual([]);
    });

    test('Test 3: book not found with the given id', ()=>{
        expect(bookStorage.getBookTopics(5)).toEqual([]);
    });

    test('Test 4: id parameter missing', () =>{
        expect(bookStorage.getBookTopics()).toEqual([]);
    });
});

describe('Testing method getPriceWithoutExtras(id)', () =>{
    const bookStorage = new BookStorage(data);
    test('Test 1: found price of the given book id', () =>{
        expect(bookStorage.getPriceWithoutExtras(1)).toEqual(25);
        expect(bookStorage.getPriceWithoutExtras(2)).toEqual(45);
        expect(bookStorage.getPriceWithoutExtras(3)).toEqual(30);
    });

    test('Test 2: found no book with the given id', () =>{
        expect(()=> bookStorage.getPriceWithoutExtras(5)).toThrow('nothing found with given id');
    });
});

describe('Testing method getTotalPrice(id)', () =>{
    const bookStorage = new BookStorage(data);
    test('Test 1: total price of the book with given id', () =>{
        expect(bookStorage.getTotalPrice(1)).toEqual(70);
        expect(bookStorage.getTotalPrice(2)).toEqual(190);
        expect(bookStorage.getTotalPrice(3)).toEqual(30);
    });

    test('Test 2: found no book with the given id', () =>{
        expect(()=> bookStorage.getTotalPrice(5)).toThrow('nothing found with given id');
    });
});

describe('Testing method getPriceOfTheExtras(id)', () =>{
    const bookStorage = new BookStorage(data);

    test('Test 1: total price of extras with given book id', ()=>{
        expect(bookStorage.getPriceOfTheExtras(1)).toEqual(45);
        expect(bookStorage.getPriceOfTheExtras(2)).toEqual(145);
    });

    test('Test 2: found no extras with the given id', () =>{
        expect(bookStorage.getPriceOfTheExtras(3)).toEqual(0);
    });

    test('Test 3: found no book with the given id', () =>{
        expect(()=> bookStorage.getPriceOfTheExtras(5)).toThrow('nothing found with given id');
    });
});
'use strict';

module.exports = class BookStorage {
    constructor(data){
        if(!data) throw new Error('data storage missing');
        this.bookStorage = data;
    }

    getById(id){
        if(!id) throw new Error('parameter missing');

        for(let book of this.bookStorage){
            if(book.id === id){
                return book;
            }
            else {
                return null;
            }
        }
    }

    getAllIdsByName(value){
        const bookIds = [];
        if(value){
            for(let book of this.bookStorage){
                if(book.name === value){
                    bookIds.push({bookId: book.id});
                }
            }
        }
        return bookIds;
    }

    getAllBookAuthors(){
        const foundAuthors = [];
        for(let book of this.bookStorage){
            if(book.author.length === 0){
                return [];
            }
            else if(!foundAuthors.includes(book.author)){
                foundAuthors.push(book.author)
            }
        }
        return foundAuthors;
    }

    getAllBooksByAuthor(author){

        if(!author) throw new Error('parameter missing');

        const foundBooks = [];
        for(let book of this.bookStorage){
            if(book.author === author) foundBooks.push(book);
        }
        return foundBooks;
    }

    hasTopics(id){
       
        for(let book of this.bookStorage){
            if(book.id === id && book.topics.length > 0){
                return true;
            }
        }
        return false;
    }

    getBookTopics(id){
        let topics = [];

        for(let book of this.bookStorage){
            if(book.id === id && book.topics.length > 0){
                topics = book.topics;
            }
        }

        return topics;
    }

    getPriceWithoutExtras(id){
        for(let book of this.bookStorage){
            if(book.id === id){
                return +book.price;
            }
        }
        throw new Error('nothing found with given id');
    }

    getTotalPrice(id){
        let totalPrice = 0;

        for(let book of this.bookStorage){
            if(book.id === id){
                totalPrice += book.price;
                if(book.extras.length > 0){
                    for(let extra of book.extras){
                        totalPrice += extra.price;
                    }
                }
            }
            
        }
        if(totalPrice !== 0){
            return totalPrice;
        }
        else{
            throw new Error('nothing found with given id');
        }
    }

    getPriceOfTheExtras(id){
        let priceOfExtras = 0;

        for(let book of this.bookStorage){
            if(book.id === id){
                if(book.extras.length > 0){
                    for(let extra of book.extras){
                        priceOfExtras += extra.price;
                    }
                    return priceOfExtras;
                }
                else{
                   return priceOfExtras; 
                }
            }
        }

        throw new Error('nothing found with given id');
        
    }
}
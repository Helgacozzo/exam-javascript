const book = {
    title: "Il Grande Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
};

book.rating = 6;

book.increaseRating = (num) => {
    book.rating += num;

    if (book.rating > 10) {
        book.rating = 10;
    }
};

delete book.year;

const keys = Object.keys(book);
keys.forEach((key) => {
    const value = book[key];
    console.log(`${key}: ${value}`);
});

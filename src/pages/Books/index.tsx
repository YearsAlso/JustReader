import React, { useState } from 'react';
import { faker } from '@faker-js/faker';
import './index.css'; // 引入样式文件
import BooksDrawer from './components/BooksDrawer'; // 引入BooksDrawer组件

const books = [
    { title: 'Book 1', description: 'Description 1', cover: faker.image.url() },
    { title: 'Book 2', description: 'Description 2', cover: faker.image.url() },
    { title: 'Book 3', description: 'Description 3', cover: faker.image.url() },
    { title: 'Book 3', description: 'Description 3', cover: faker.image.url() },
    { title: 'Book 3', description: 'Description 3', cover: faker.image.url() },
    { title: 'Book 3', description: 'Description 3', cover: faker.image.url() },
    { title: 'Book 1', description: 'Description 1', cover: faker.image.url() },
    { title: 'Book 2', description: 'Description 2', cover: faker.image.url() },
    { title: 'Book 3', description: 'Description 3', cover: faker.image.url() },
    { title: 'Book 3', description: 'Description 3', cover: faker.image.url() },
    { title: 'Book 3', description: 'Description 3', cover: faker.image.url() },
    { title: 'Book 3', description: 'Description 3', cover: faker.image.url() },
    // ...更多图书
];

const BooksPage = () => {
    const [selectedBook, setSelectedBook] = useState(null);

    const handleCardClick = (book) => {
        setSelectedBook(book);
    };

    const handleCloseDrawer = () => {
        setSelectedBook(null);
    };

    return (
        <div className="books-container">
            <h1 className="books-title">Books Page</h1>
            <div className="books-grid">
                {books.map((item, index) => (
                    <div key={index} className="book-card" onClick={() => handleCardClick(item)}>
                        <div className="book-cover" style={{ backgroundImage: `url(${item.cover})` }}></div>
                        <div className="book-card-body">
                            <h2 className="book-title">{item.title}</h2>
                            <p className="book-description">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            {selectedBook && (
                <BooksDrawer book={selectedBook} onClose={handleCloseDrawer} />
            )}
        </div>
    );
};

export default BooksPage;
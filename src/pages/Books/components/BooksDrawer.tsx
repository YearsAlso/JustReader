import './BooksDrawer.css'; // 引入样式文件

const BooksDrawer = ({ book, onClose }) => {
    return (
        <div className="drawer">
            <div className="drawer-content">
                <button className="drawer-close" onClick={onClose}>Close</button>
                <h2>{book.title}</h2>
                <p>{book.description}</p>
                <div className="drawer-cover" style={{ backgroundImage: `url(${book.cover})` }}></div>
            </div>
        </div>
    );
};

export default BooksDrawer;

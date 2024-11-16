import { Card, List, Button, Row, Col, Flex } from 'antd'; // 引入 Flex 组件
import { useEffect, useState } from 'react';
import { getRecentBooks, getLatestNotes, getReadingStats } from './serve';
import { Note, ReadingStats } from './data';
import BookCard from './components/BookCard'; // 引入 BookCard 组件
import './index.css'; // 引入自定义样式
import 'tailwindcss/tailwind.css'; // 引入 Tailwind CSS 样式

const Main = () => {
    const [recentBooks, setRecentBooks] = useState<string[]>([]);
    const [latestNotes, setLatestNotes] = useState<Note[]>([]);
    const [readingStats, setReadingStats] = useState<ReadingStats>({ hoursThisMonth: 0 });

    useEffect(() => {
        const fetchData = async () => {
            const books = await getRecentBooks();
            const notes = await getLatestNotes();
            const stats = await getReadingStats();
            setRecentBooks(books);
            setLatestNotes(notes);
            setReadingStats(stats);
        };
        fetchData();
    }, []);

    return (
        <div className="p-4">
            <Row gutter={[16, 16]}>
                <Col xs={24} lg={16}>
                    <Card title="最近查看的图书" className="rounded-2xl shadow-md" bordered={false}>
                        <Flex justify="space-between" className="book-card-container">
                            {recentBooks.map((book, index) => (
                                <BookCard key={index} book={book} />
                            ))}
                        </Flex>
                    </Card>
                    <Card title="本月的阅读时间统计" className="rounded-2xl shadow-md" bordered={false}>
                        <p>本月阅读时间: {readingStats.hoursThisMonth} 小时</p>
                    </Card>
                </Col>
                <Col xs={24} lg={8}>
                    <Card title="最新的笔记" className="rounded-2xl shadow-md" bordered={false}>
                        <List
                            dataSource={latestNotes}
                            renderItem={item => (
                                <List.Item style={{ padding: '8px 0' }}>
                                    <Card className="flex flex-col items-center rounded-2xl shadow-md w-full" bordered={false} style={{ width: '100%' }}>
                                        <div className="flex flex-col items-center w-full p-4">
                                            <img src="thumbnail.jpg" alt="Book Thumbnail" className="w-16 h-16 mb-2" />
                                            <p className="font-bold">书名</p>
                                            <p className="text-gray-500">作者</p>
                                        </div>
                                        <div className="w-full p-4">
                                            <p className="text-gray-500">时间: 2023-10-01</p>
                                            <p className="truncate">{item.note.length > 50 ? `${item.note.substring(0, 50)}...` : item.note}</p>
                                            <Button type="link">跳转到读书位置</Button>
                                        </div>
                                    </Card>
                                </List.Item>
                            )}
                            split={false} // 去掉分割线
                        />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Main;

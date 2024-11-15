import { Card, List, Button, Row, Col } from 'antd';
import { useEffect, useState } from 'react';
import { getRecentBooks, getLatestNotes, getReadingStats } from './serve';
import { Note, ReadingStats } from './data';
import './index.css'; // 引入自定义样式

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
                        <div className="flex flex-row space-x-4 overflow-x-auto">
                            {recentBooks.map((book, index) => (
                                <div key={index} className="book-card">
                                    {book}
                                </div>
                            ))}
                            <div className="book-card half-hidden">
                                {recentBooks[recentBooks.length - 1]}
                            </div>
                        </div>
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
                                <List.Item>
                                    <Card className="flex flex-col md:flex-row items-center rounded-2xl shadow-md w-full" bordered={false}>
                                        <img src="thumbnail.jpg" alt="Book Thumbnail" className="w-16 h-16 mr-4" />
                                        <div className="flex-1">
                                            <p className="text-gray-500">时间: 2023-10-01</p>
                                            <p>{item.note}</p>
                                            <Button type="link">跳转到读书位置</Button>
                                        </div>
                                    </Card>
                                </List.Item>
                            )}
                        />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Main;

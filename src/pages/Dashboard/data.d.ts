export interface Note {
    note: string;
}

export interface ReadingStats {
    hoursThisMonth: number;
}


export interface IBook {
    book: string; // 书籍名称
    title: string; // 书籍标题
    author: string; // 作者名称
    createdAt?: Date; // 创建日期
    sort?: number; // 分类
    id: string; // 书籍ID
    overview: string; // 书籍概述
}
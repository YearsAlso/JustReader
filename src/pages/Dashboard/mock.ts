import { IBook, Note, ReadingStats } from './data';
import { faker } from '@faker-js/faker';

// 使用 faker 生成 Mock 数据
const mockBooks: IBook[] = Array.from({ length: 4 }, () => ({
    book: faker.lorem.words(3),
    title: faker.lorem.sentence(),
    author: faker.name.firstName(),
    createdAt: faker.date.past(),
    sort: faker.number.int(),
    id: faker.string.uuid(),
    overview: faker.lorem.paragraph(),
}));

const mockNotes: Note[] = Array.from({ length: 5 }, () => ({
    note: faker.lorem.sentence(),
}));

const mockReadingStats: ReadingStats = {
    hoursThisMonth: faker.number.int({ min: 1, max: 100 }),
};

export const getMockRecentBooks = async (): Promise<IBook[]> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(mockBooks), 1000);
    });
};

export const getMockLatestNotes = async (): Promise<Note[]> => {
    return new Promise((resolve) => resolve(mockNotes), 1000);
};

export const getMockReadingStats = async (): Promise<ReadingStats> => {
    return new Promise((resolve) => resolve(mockReadingStats), 1000);
};
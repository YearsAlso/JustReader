import { IBook, Note, ReadingStats } from '../types/data';
import { faker } from '@faker-js/faker';


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
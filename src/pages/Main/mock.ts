import { Note, ReadingStats } from './data';

// Mock 数据
const mockBooks: string[] = [
    "Mock Book 1",
    "Mock Book 2",
    "Mock Book 3",
];

const mockNotes: Note[] = [
    { note: "Mock Note 1" },
    { note: "Mock Note 2" },
    { note: "Mock Note 3" },
];

const mockReadingStats: ReadingStats = {
    hoursThisMonth: 15,
};

export const getMockRecentBooks = async (): Promise<string[]> => {
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

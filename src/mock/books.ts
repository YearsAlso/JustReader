import { faker } from "@faker-js/faker";
import { IBook } from "../types/data";

// 使用 faker 生成 Mock 数据
const mockBooks: IBook[] = Array.from({ length: 4 }, () => ({
    bookName: faker.lorem.words(3),
    title: faker.lorem.sentence(),
    author: faker.name.firstName(),
    createdAt: faker.date.past(),
    sort: faker.number.int(),
    id: faker.string.uuid(),
    overview: faker.lorem.paragraph(),
    cover: faker.image.url({ width: 200, height: 300  }),
}));

export const getMockBooks = async (): Promise<IBook[]> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(mockBooks), 1000);
    });
}
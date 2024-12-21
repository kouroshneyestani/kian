import { faker } from "@faker-js/faker";

export interface Event {
    id: number;
    name: string;
    date: string;
    description: string;
    gallery: string[];
}

export const events: Event[] = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    name: faker.commerce.productName(),
    date: faker.date.past().toString(),
    description: faker.lorem.sentence(),
    gallery: Array.from({ length: 5 }, () =>
        faker.image.urlLoremFlickr({
            width: 400,
            height: 300,
        })
    ),
}));

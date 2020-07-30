import { Message } from './message';

export class Post{
    userId: number;
    username: string;
    id: number;
    title: string;
    body: string;
    messages: Message[];
}
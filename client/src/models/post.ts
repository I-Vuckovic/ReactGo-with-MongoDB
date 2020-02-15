import { Comment } from "./comment";

export interface Post {
    _id?: string,
    title: string,
    imageUrl: string,
    body: string,
    numOfFavorites: number,
    comments: Comment[],
    dateCreated: string,
    author: string,
    authorId: string,
}

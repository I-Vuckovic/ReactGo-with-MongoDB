
export interface User {
    username: string,
    password: string,
    _id?: string,
    favoritePosts: number[],
    moderator: boolean,
}
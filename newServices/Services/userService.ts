import { User } from "../models/user";
import { USERS } from "../constants/urls";
import { USERS2 } from "../constants/urls";
import { Post } from "../models/post";

export async function fetchUser(user: User) {
    const res = await fetch(`${USERS2}/password/${user.username}&${user.password}`);
    return await res.json();
        
}

export async function fetchUserByUsername(username: string) {
    const res = await fetch(`${USERS2}/username/${username}`);
    return await res.json();
        
}

export function addToFavorites(postId: number, userId: number) {
    try {
        return fetch(`${USERS2}/id/${userId}`)
            .then(res => res.json())
            .then(res => {
                res.favoritePosts = [...res.favoritePosts, postId];
                return fetch(`${USERS2}/update`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(res)
                })
                    .then(res => res.json())
            })
    }
    catch (error) {
        return console.log(error);
    }
}
//ovu nisam testirao
export function removeFromFavorites(postId: number, userId: number) {
    try {
        return fetch(`${USERS2}/id/${userId}`)
            .then(res => res.json())
            .then(res => {
                res.favoritePosts = res.favoritePosts.filter((id:number) => id !== postId);
                return fetch(`${USERS2}/update`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(res)
                })
                    .then(res => res.json())
            })
    }
    catch (error) {
        return console.log(error);
    }
}

export async function getUser(id: number){
    try{
    const res = await fetch(`${USERS2}/id/${id}`);
    return await res.json();
    }
    catch (res) {
        console.log(res);
    }
}

export function registerUser(user:User){
    return fetch(USERS2 + "/add", {
        method: "POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(res => res.json())
}

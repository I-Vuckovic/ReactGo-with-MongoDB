import { User } from "../models/user";
import { USERS } from "../constants/urls";
import { Post } from "../models/post";

export async function fetchUser(user: User) {

    return fetch(`${USERS}/password/${user.username}&${user.password}`).then( res => {
        
        return res.json()
    }

    ).then (res => {return res})
    .catch(error => console.log(error));


    const res = await fetch(`${USERS}/password/${user.username}&${user.password}`);
    console.log(res);
    return await res.json();
        
}

export async function fetchUserByUsername(username: string) {
    const res = await fetch(`${USERS}/username/${username}`);
    return await res.json();
        
}


export function addToFavorites(postId: number, userId: string) {
    try {
        return fetch(`${USERS}/id/${userId}`)
            .then(res => res.json())
            .then(res => {
                res.favoritePosts = [...res.favoritePosts, postId];
                return fetch(`${USERS}/update`, {
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

export function removeFromFavorites(postId: number, userId: string) {
    try {
        return fetch(`${USERS}/id/${userId}`)
            .then(res => res.json())
            .then(res => {
                res.favoritePosts = res.favoritePosts.filter((id:number) => id !== postId);
                return fetch(`${USERS}/update`, {
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

export async function getUser(id: string){
    try{
    const res = await fetch(`${USERS}/id/${id}`);
    return await res.json();
    }
    catch (res) {
        console.log(res);
    }
}

export function registerUser(user:User){
    return fetch(`${USERS}/add`, {
        method: "POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(res => res.json())
}

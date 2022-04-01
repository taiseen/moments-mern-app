import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../../constants/actionTypes';

export const posts = (posts = [], { type, data }) => {

    switch (type) {

        case FETCH_ALL:
            return data;

        case CREATE:
            return [...posts, data];

        case UPDATE:
            return posts.map(post => post._id === data._id ? data : post);

        case DELETE:
            return posts.filter(post => post._id !== data);

        default:
            return posts;
    }
}
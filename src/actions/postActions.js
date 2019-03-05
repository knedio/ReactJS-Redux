import { FETCH_POSTS, NEWPOST } from './types';

export const fetchPosts = () => dispatch => {
	console.log('fetching');
	fetch('https://jsonplaceholder.typicode.com/posts')
	.then(res => res.json())
	.then(posts => dispatch({
		type: FETCH_POSTS,
		payload: posts
	}))
}

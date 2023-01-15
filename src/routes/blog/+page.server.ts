import posts from '$lib/posts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const newestFirst = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return {
		posts: newestFirst
	};
};

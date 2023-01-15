import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

import posts from '$lib/posts';
import type { Post } from '$lib/posts';

export const load: PageServerLoad = async ({ params }) => {
	const post = Object(posts).find((p: Post) => p.slug.toLowerCase() === params.slug.toLowerCase());

	if (!post) {
		throw error(404, {
			message: 'Not found'
		});
	}

	return post;
};

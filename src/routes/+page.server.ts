import episodes from '$lib/episodes';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return { episodes: episodes };
};

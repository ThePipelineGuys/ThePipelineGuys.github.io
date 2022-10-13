import podcast from '$lib/podcast';
import episodes from '$lib/episodes';
import type { RequestHandler } from './$types';
import { Podcast } from 'podcast';

export const prerender = true;

export const GET: RequestHandler = async () => {
	const feed = new Podcast(podcast, episodes);
	const body = feed.buildXml();
	const headers = {
		'Cache-Control': 'max-age=0, s-maxage=3600',
		'Content-Type': 'application/xml'
	};
	return new Response(body, { headers: headers });
};

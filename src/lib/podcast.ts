import type { FeedOptions } from 'podcast';

export type Podcast = FeedOptions & Record<string, unknown>;

export const site = {
	baseUrl: 'https://thepipelineguys.live/',
	cdnUrl: 'https://thepipelineguys-cdn.s3.eu-central-003.backblazeb2.com/'
};

const podcast: Podcast = {
	title: 'The Pipeline Guys',
	description:
		"Lino e Manuel, sistemisti e ingegneri del cloud di giorno, idraulici delle pipeline a caccia dell'ultima tecnologia cloud-native di notte! Ogni 15 giorni raccontano le maggiori novità nel loro ambito con l'obiettivo di arricchirle di esperienza personale e rendere il contenuto fruibile a tutta la community. Presenti inoltre interviste ad ospiti speciali dalle community del modo cloud, infrastrutture e networking. Immancabili i follow degli eventi tech più importanti!",
	generator: "ThePipelineGuys' pipeline",
	feedUrl: `${site.baseUrl}feed.xml`,
	siteUrl: site.baseUrl,
	imageUrl: `${site.baseUrl}images/podcast.jpeg`,
	author: 'Manuel & Lino',
	managingEditor: 'info@linoproject.net (Lino Telera)',
	webMaster: 'hi@manuelcoppotelli.me (Manuel Coppotelli)',
	copyright:
		"© The Pipeline Guys. Tutti i contenuti di questo podcast e dei link in descrizione rappresentano l'opinione strettamente personale degli autori e frutto dalla loro esperienza sul campo; non sono in alcun modo connessi ad eventuali vendor e/o aziende nominate né tantomeno sponsorizzati da qualcuno.",
	language: 'it',
	categories: ['Technology', 'Tech News'],
	pubDate: new Date().toUTCString(),
	itunesOwner: {
		name: 'Manuel & Lino',
		email: 'thepipelineguys@protonmail.com'
	},
	itunesCategory: [
		{
			text: 'Technology'
		},
		{
			text: 'News',
			subcats: [
				{
					text: 'Tech News'
				}
			]
		}
	],
	itunesType: 'episodic',
	customNamespaces: {
		googleplay: 'http://www.google.com/schemas/play-podcasts/1.0'
	},
	customElements: [
		{ 'googleplay:author': 'Manuel & Lino' },
		{ 'googleplay:image': `${site.baseUrl}static/images/podcast.jpeg` },
		{ 'googleplay:email': 'thepipelineguys@protonmail.com' },
		{ 'googleplay:description': 'No release on friday evening' },
		{ 'googleplay:category': 'Tech' },
		{ 'googleplay:explicit': 'No' }
	]
};

export default podcast;

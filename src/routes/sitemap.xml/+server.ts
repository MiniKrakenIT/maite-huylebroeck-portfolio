import * as sitemap from 'super-sitemap';
import type { RequestHandler } from '@sveltejs/kit';
import env from '$env/static/public';

export const prerender = true;

export const GET: RequestHandler = async () => {
	return await sitemap.response({
		origin: env.PUBLIC_ORIGIN
	});
};

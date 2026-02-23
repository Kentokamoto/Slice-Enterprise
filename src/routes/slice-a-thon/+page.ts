import { redirect } from '@sveltejs/kit';

export function load() {
    redirect(307, '/slice-a-thon/2025');
}
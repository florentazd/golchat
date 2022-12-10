import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params, url }) => {
    if (url.pathname == "/")
        throw redirect(303, "/signin")
}
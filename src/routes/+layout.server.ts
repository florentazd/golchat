import serialize from "$lib/serialize";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ locals }) => {
    if (locals.user) {
        // console.log(serialize(locals.user));
    }
}
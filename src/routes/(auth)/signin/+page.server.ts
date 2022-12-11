import { error, invalid, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import type { Actions } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
    if (locals.pb.authStore.isValid) {
        throw redirect(303, "/messages")
    }
}

export const actions: Actions = {
    signin: async ({ request, locals }) => {
        const formData = await request.formData()
        const guest = Object.fromEntries([...formData])
        if (!guest.email || !guest.password) {
            return invalid(400, {
                reason: "empty row",
                payload: { ...guest }
            });
        }
        try {
            const authData = await locals.pb.collection("users").authWithPassword(guest.email as string, guest.password as string)
            return {}
        }
        catch (e) {
            return invalid(400, {
                reason: "invalid creadentials",
            })
        }
    },
    signout: async ({ request, locals }) => {
        console.log("Hello");
        return {

        }
    }
}
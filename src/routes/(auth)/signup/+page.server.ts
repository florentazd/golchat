import { invalid, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
    if (locals.pb.authStore.isValid) {
        throw redirect(303, "/messages")
    }
}

export const actions: Actions = {
    default: async ({ request, locals }) => {
        const data = await request.formData()

        const newUser = {
            'name': data.get("name"),
            "email": data.get("email"),
            "username": data.get("username"),
            "emailVisibility": true,
            "password": data.get("password"),
            "passwordConfirm": data.get("password")
        }
        try {
            const record = await locals.pb.collection("users").create(newUser)
            return { success: true }
        } catch {
            return invalid(400, {
                success: false
            })
        }



    }
}
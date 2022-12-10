import { invalid } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import pbClient from '$lib/pbClient';

export const actions: Actions = {
    default: async ({ request }) => {
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
            const record = await pbClient.collection("users").create(newUser)
            return { success: true }
        } catch {
            return invalid(400, {
                success: false
            })
        }



    }
}
import pbClient from "$lib/pbClient";
import { invalid, redirect } from "@sveltejs/kit";
import type { LayoutLoad } from "../../$types";
import type { Actions } from "./$types";


export const load: LayoutLoad = async () => {

}

export const actions: Actions = {
    default: async ({ request, cookies }) => {
        const formData = await request.formData()
        const guest = {
            "email": formData.get("email"),
            "password": formData.get("password")
        }
        if (!guest.email || !guest.password) {
            return invalid(400, {
                reason: "empty row",
                payload: { ...guest }
            });
        }

        try {
            const authData = await pbClient.collection("users").authWithPassword(guest.email as string, guest.password as string)
            return {

            }
        }
        catch {
            return invalid(400, {
                reason: "invalid creadentials",
            })
        }
    }
}
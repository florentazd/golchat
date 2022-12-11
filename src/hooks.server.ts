import { redirect, type Handle } from "@sveltejs/kit"
import Pocketbase from "pocketbase"

export const handle = (async ({ event, resolve }) => {
    if (event.url.pathname == "/") {
        throw redirect(303, "/signin")
    }

    event.locals.pb = new Pocketbase("http://localhost:8090")
    // Create a new pocketbase instance at every request
    event.locals.pb.authStore.loadFromCookie(event.request.headers.get("cookie") || '')
    // On récupère le token envoyer au server a chaque requete par les cookies
    try {
        event.locals.pb.authStore.isValid && await event.locals.pb.collection("users").authRefresh();
        event.locals.user = event.locals.pb.authStore.model
    } catch {
        event.locals.pb.authStore.clear();
    }

    const response = await resolve(event)
    response.headers.set("set-cookie", event.locals.pb.authStore.exportToCookie({ secure: false }))
    return response
}) satisfies Handle;
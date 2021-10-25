const project = import.meta.env.VITE_SANITY_PROJECT
const dataset = import.meta.env.VITE_SANITY_DATASET

export async function fetchSanityAPI(url) {
    const response = await fetch(url, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_SANITY_KEY}`,
        },
    });
    return response.json();
}
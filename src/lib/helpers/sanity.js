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

export async function queryContent(q) {
    let query = encodeURIComponent(q)
    let dataset = 'production'
    let projectID = 'uzmzj3zh'
    return await fetchSanityAPI(`
    https://${projectID}.api.sanity.io/v1/data/query/${dataset}?query=${query}
    `)
}

// TODO: use this method to fetch the required url:
// encodeURIComponent(str)
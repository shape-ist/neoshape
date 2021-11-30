import client from 'part:@sanity/base/client'

function isUniqueAcrossAllDocuments(slug, options) {
    const {
        document
    } = options

    const id = document._id.replace(/^drafts\./, '')
    const params = {
        draft: `drafts.${id}`,
        published: id,
        slug
    }

    const query = `!defined(*[!(_id in [$draft, $published]) && slug.current == $slug][0]._id)`

    return client.fetch(query, params)
}

export default {
    name: "education",
    title: "Education",
    type: "document",
    fields: [{
            title: "Education Title",
            name: "title",
            type: "string",
            validation: Rule => Rule.required().min(4).max(40)
        },
        {
            title: "Slug",
            name: "slug",
            type: "slug",
            description: "this will provide the URL of the edu item (e.g. slug climate-change will publish the edu item on https://shape.ist/.../climate-change)",
            validation: Rule => Rule.required(),
            options: {
                source: "title",
                isUnique: isUniqueAcrossAllDocuments
            }
        },
        {
            title: "is Workshop",
            name: 'isWorkShop',
            type: 'boolean',
            initialValue: false,
            description: 'Check this checkbox if this edu item is a workshop, some UI elements will be adjusted accordingly.'
        },
        {
            title: "Preview",
            name: "preview",
            type: "text",
            description: "Short information about the edu item, this will be displayed in the edu page as a shorter description of the item. Make sure it is eye-catching and intriguing. This field is ideally a shorter description (see below) or just the introduction of the below field.",
            validation: Rule => Rule.required()
                .min(250).error('The edu overview should be at least 250 characters long.')
                .max(500)
        },
        {
            title: "Overview",
            name: "overview",
            type: "text",
            description: "Describe the item. Include essential information along with useful information for anyone who might be interested. This should be much more elaborate than the overview as this will be only seen by people who actually click on the edu item.",
            validation: Rule => Rule.required()
                .min(600).error('Overview should be at least 600 characters long.')
                .max(10000)
        },
        {
            title: "Icon",
            name: "icon",
            type: "image",
            description: "This should not be a photograph, but rater an icon that resembles the edu item. (e.g. logo, vector graphic, icon)",
            validation: Rule => Rule.required()
        },
        {
            title: "Instagram",
            description: 'A social link for the current item',
            name: "instagram",
            type: "url"
        },
        {
            title: "Twitter",
            description: 'A social link for the current item',
            name: "twitter",
            type: "url"
        },
        {
            title: "LinkedIn",
            description: 'A social link for the current item',
            name: "linkedin",
            type: "url"
        }
    ]
}

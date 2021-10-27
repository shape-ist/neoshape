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
            title: "Metadata",
            name: "metadata",
            type: "array",
            description: "Edu metadata. Critical information about the item. (e.g. 'Number of students: 14' or 'Time: 4 hours a week') Avoid longer information. (e.g. list of prerequisites should not be here, it should be in the overview.) ",
            of: [{
                title: "Meta",
                name: "meta-item",
                type: "object",
                fields: [{
                        title: 'Meta Name',
                        name: 'name',
                        type: 'string',
                        description: 'The identifier of the information you want to display. (e.g. number of students)',
                        validation: Rule => Rule.required()
                            .min(4)
                            .max(24).error('Metadata must be very short. If this information is relatively longer, consider putting it in the overview field.')
                    },
                    {
                        title: 'Meta Content',
                        name: 'content',
                        type: 'string',
                        description: 'The content of the information you want to display. (e.g. 14)',
                        validation: Rule => Rule.required()
                            .max(24).error('Metadata must be very short. If this information is relatively longer, consider putting it in the overview field.')
                    }
                ]
            }]
        },
        {
            title: "Icon",
            name: "icon",
            type: "image",
            description: "This should not be a photograph, but rater an icon that resembles the edu item. (e.g. logo, vector graphic, icon)",
            validation: Rule => Rule.required()
        }
    ]
}
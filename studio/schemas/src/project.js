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
    name: "project",
    title: "Projects",
    type: "document",
    fields: [{
            title: "Project Title",
            name: "title",
            type: "string",
            validation: Rule => Rule.required().min(4).max(40)
        },
        {
            title: "Slug",
            name: "slug",
            type: "slug",
            description: "this will provide the URL of the project (e.g. slug the-istanbul-chronicle will publish the project on https://shape.ist/.../the-istanbul-chronicle)",
            validation: Rule => Rule.required(),
            options: {
                source: "title",
                isUnique: isUniqueAcrossAllDocuments
            }
        },
        {
            title: "Preview",
            name: "preview",
            type: "text",
            description: "Short information about the project, this will be displayed in the projects page as a shorter description of the project. Make sure it is eye-catching and intriguing. This field is ideally a shorter description (see below) or just the introduction of the below field.",
            validation: Rule => Rule.required()
                .min(250).error('The project overview should be at least 250 characters long.')
                .max(500)
        },
        {
            title: "Project Overview",
            name: "overview",
            type: "text",
            description: "Describe the project. Include essential information along with useful information for anyone who might be interested. This should be much more elaborate than the overview as this will be only seen by people who actually click on the project.",
            validation: Rule => Rule.required()
                .min(600).error('Project overview should be at least 600 characters long.')
                .max(10000)
        },
        {
            title: "Jobs",
            name: "jobs",
            type: "array",
            description: "A list of jobs, these will be displayed after the project description and users will be able to apply as long as 'Job Availability'. Press 'Add Item' to get started.",
            of: [{
                title: "Job",
                name: "job",
                type: "object",
                fields: [{
                        title: "Job Title",
                        name: "jobTitle",
                        type: "string",
                        description: "The title, keep it short and fancy.",
                        validation: Rule => Rule.required().min(4).max(32)
                    },
                    {
                        title: "Job Description",
                        name: "jobDescription",
                        type: "text",
                        description: "A long description of the particular job. Explain the requirements and expectations. Explain what the user will be doing if they apply to the job.",
                        validation: Rule => Rule.required()
                            .min(600).error('Job descriptions should consist of at least 600 characters')
                            .max(10000)
                    },
                    {
                        title: "Job Application URL",
                        name: "jobApplicationURL",
                        type: "url",
                        description: "The URL the writers will be redirected when applying to the job. Ideally a Google form, but also can contain internal links from shape.ist if internal job applications are implemented in the future.",
                        validation: Rule => Rule.required(),
                    },
                    {
                        title: "Applications Open",
                        name: "jobAvailability",
                        type: "boolean",
                        initialValue: true,
                        description: "Whether Shape is still offering this job or not. Do not delete the job, just turn this field off, nobody will be able to apply to the job until you turn this back on. Ideally, keep this on if you are creating a new job.",
                        validation: Rule => Rule.required(),
                    }
                ],
            }]
        },
        {
            title: "Project Icon",
            name: "icon",
            type: "image",
            description: "This should not be a photograph, but rater an icon that resembles the project. (e.g. logo, vector graphic, icon)",
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
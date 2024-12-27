import { defineType, defineField, defineArrayMember } from "sanity";

export const blog = defineType({
    name: "blog",
    type: "document",
    title: "Blog Content",
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Blog Title",
            validation: rule => rule.required()
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: { source: 'title', maxLength: 96 },
        }),
        defineField({
            name: 'summary',
            title: 'Summary',
            type: 'array',
            of: [{ type: "block" }],
            validation: rule => rule.required().max(20)
        }),
        defineField({
            name: 'author',
            type: 'reference',
            title: 'Author',
            to: [{ type: 'author' }],
        }),
        defineField({
            name: 'publishedAt',
            type: 'datetime',
            title: 'Published at',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: "block" }],
            validation: rule => rule.required()
        }),
        defineField({
            name: 'image',
            type: 'image',
            title: 'Image',
            options: { hotspot: true },
        })
    ]
})
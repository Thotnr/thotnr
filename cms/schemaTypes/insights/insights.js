import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'insight',
  title: 'Insight',
  type: 'document',

  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        layout: 'dropdown',
        list: [
          {title: 'Vision Augmented', value: 'vision-augmented'},
          {title: 'Cognitive Augmented', value: 'cognitive-augmented'},
          {title: 'Architecture Augmented', value: 'architecture-augmented'},
        ],
      },
    }),

    defineField({name: 'tagline', title: 'Tagline', type: 'string'}),
    defineField({name: 'subheadline', title: 'Subheadline', type: 'text'}),
    defineField({name: 'description', title: 'Description', type: 'text'}),

    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {hotspot: true},
    }),

    defineField({
      name: 'author',
      title: 'Author',
      type: 'object',
      fields: [
        defineField({name: 'name', title: 'Name', type: 'string'}),
        defineField({name: 'role', title: 'Role', type: 'string'}),
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {hotspot: true},
        }),
      ],
    }),

    defineField({name: 'publishDate', title: 'Publish Date', type: 'string'}),

    defineField({
      name: 'bodyHtml',
      title: 'Body HTML + CSS',
      type: 'text',
      rows: 40,
      description: 'Trusted HTML only. You can include <style> tag inside this field.',
    }),

    defineField({
      name: 'bodyImages',
      title: 'Body Images',
      type: 'array',
      description: 'Upload images used inside Body HTML. Copy the image URL and use it in <img src="">.',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            }),
            defineField({
              name: 'label',
              title: 'Image Label',
              type: 'string',
              description: 'Example: Governance operating model image',
            }),
          ],
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'coverImage',
    },
  },
})
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'coverSubheadline'},
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {hotspot: true},
    }),

    defineField({
    name: 'coverVideo',
    title: 'Cover Video (Optional)',
    type: 'file',

    description:
        'Optional. Currently website uses Cover Image. Upload only if this case study should support video in future.',

    options: {
        accept: 'video/*',
    },

    validation: (Rule) =>
        Rule.custom(() => true),
    }),

    defineField({
      name: 'coverTagline',
      title: 'Cover Tagline',
      type: 'string',
    }),

    defineField({
      name: 'coverSubheadline',
      title: 'Cover Subheadline',
      type: 'string',
    }),

    defineField({
      name: 'meta',
      title: 'Meta Information',
      type: 'caseStudyMeta',
    }),

    defineField({
      name: 'backdrop',
      title: 'Backdrop',
      type: 'contentSection',
    }),

    defineField({
      name: 'challenge',
      title: 'Challenge',
      type: 'contentSection',
    }),

    defineField({
      name: 'solution',
      title: 'Solution',
      type: 'contentSection',
    }),

    defineField({
      name: 'outcome',
      title: 'Outcome',
      type: 'contentSection',
    }),

    defineField({
      name: 'clientSpeak',
      title: 'Client Speak',
      type: 'clientSpeak',
    }),

    defineField({
      name: 'cta',
      title: 'CTA',
      type: 'caseStudyCta',
    }),
  ],

  preview: {
    select: {
      title: 'coverSubheadline',
      subtitle: 'meta.company',
      media: 'coverImage',
    },
  },
})
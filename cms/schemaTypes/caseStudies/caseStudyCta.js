import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'caseStudyCta',
  title: 'Case Study CTA',
  type: 'object',
  fields: [
    defineField({name: 'headline', title: 'Headline', type: 'string'}),
    defineField({name: 'description', title: 'Description', type: 'text'}),
    defineField({name: 'buttonText', title: 'Button Text', type: 'string'}),
  ],
})
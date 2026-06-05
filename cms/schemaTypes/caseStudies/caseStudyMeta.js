import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'caseStudyMeta',
  title: 'Case Study Meta',
  type: 'object',
  fields: [
    defineField({name: 'sector', title: 'Sector', type: 'string'}),
    defineField({name: 'company', title: 'Company', type: 'string'}),
    defineField({name: 'service', title: 'Service', type: 'string'}),
    defineField({name: 'offering', title: 'Offering', type: 'string'}),
  ],
})
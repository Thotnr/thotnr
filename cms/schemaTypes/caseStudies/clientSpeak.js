import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'clientSpeak',
  title: 'Client Speak',
  type: 'object',
  fields: [
    defineField({name: 'quote', title: 'Quote', type: 'text', rows: 6}),
    defineField({name: 'name', title: 'Name', type: 'string'}),
    defineField({name: 'role', title: 'Role', type: 'string'}),
    defineField({name: 'company', title: 'Company', type: 'string'}),
    defineField({
      name: 'image',
      title: 'Person Image',
      type: 'image',
      options: {hotspot: true},
    }),
  ],
})
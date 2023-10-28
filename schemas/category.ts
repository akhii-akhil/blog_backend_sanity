import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'Name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'Body',
      title: 'Body',
      type: 'string',
    }),
    defineField({
      name: 'personName',
      title: 'personName',
      type: 'string',
    }),
    defineField({
      name: 'personDes',
      title: 'personDes',
      type: 'string',
    }),
    defineField({
      name: 'metaImage',
      title: 'Image with metadata',
      type: 'string',
      
    }),
  ],
})

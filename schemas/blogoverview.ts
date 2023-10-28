import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'BlogoverviewData',
  title: 'BlogPosts',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
        name: 'image',
        title: 'image',
        type: 'string',
      }),
    defineField({
        name: 'Body',
        title: 'Body',
        type: 'string',
    }),
    defineField({
        name: 'Author',
        title: 'Autor',
        type: 'string',
    }),
    defineField({
        name: 'designation',
        title: 'designation',
        type: 'string',
    }),
    defineField({
        name: 'docsLink',
        title: 'docsLink',
        type: 'string',
      })
    
    
  ],

  
})

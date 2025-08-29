import {defineField, defineType} from 'sanity'

export const aboutServices = defineType({
  name: 'about-services',
  title: 'Usługi na stronie O nas',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: "W naszej ofercie znajdują się:",
      type: 'string',
    }),
  ],
})
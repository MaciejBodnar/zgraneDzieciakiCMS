import {defineField, defineType} from 'sanity'

export const logopedia = defineType({
  name: 'logopedia',
  title: 'Informacje na stronie logopedia',
  type: 'document',
  fields: [
    defineField({
      name: 'age',
      title: "Wiek dziecka",
      type: 'string',
    }),
    defineField({
      name: 'symptoms',
      title: "Symptomy jakie wystpęują u dziecka",
      type: 'array',
      of: [{type: "string"}],
    }),
  ],
})
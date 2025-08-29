import {defineField, defineType} from 'sanity'

export const aboutTeam = defineType({
  name: 'about-team',
  title: 'Informacje o zespole na stronie O nas',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: "Imię i nazwisko terapeuty",
      type: 'string',
    }),
    defineField({
      name: 'roles',
      title: 'Czym się zajmuje?',
      type: 'array',
      of: [{type: "string"}],
    }
),
  ],
})
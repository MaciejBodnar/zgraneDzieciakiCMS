import {defineField, defineType} from 'sanity'

export const cennik = defineType({
  name: 'cennik',
  title: 'Informacje na stronie cennik',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: "Jaki obszar terapii",
      type: 'string',
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              title: 'Nazwa usługi',
              name: 'name',
              type: 'string'
            },
            {
              title: 'Cena za usługę',
              name: 'price',
              type: 'string'
            },
          ]
        }
      ],
    }
),
  ],
})
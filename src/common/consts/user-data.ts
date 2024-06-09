import { faker } from '@faker-js/faker'

import { ResponseUser } from '../../app/api/api'

const generateResponseUser = (): ResponseUser => ({
  accountType: faker.helpers.arrayElement(['children', 'parent', 'idle']),
  email: faker.internet.email(),
  id: faker.datatype.uuid(),
  img: {
    children: faker.image.avatar(),
    idle: faker.image.avatar(),
    parent: faker.image.avatar(),
  },
  name: {
    children: faker.name.firstName(),
    idle: faker.name.firstName(),
    parent: faker.name.firstName(),
  },
})

export const userData = generateResponseUser()

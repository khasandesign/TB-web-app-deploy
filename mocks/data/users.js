import { faker } from '@faker-js/faker'

export const users = [
  {
    id: 1,
    password: '123456',
    profile: {
      firstName: faker.name.firstName(),
      middleName: faker.name.middleName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      role: {
        name: 'student',
      },
      phoneNumber: {
        countryCode: 'uz',
        localNumber: '1234567',
        value: '998931234567',
      },
    },
  },
  {
    id: 2,
    password: '123456',
    profile: {
      firstName: faker.name.firstName(),
      middleName: faker.name.middleName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      role: {
        name: 'teacher',
      },
      phoneNumber: {
        countryCode: 'uz',
        localNumber: '1234567',
        value: '998971234567',
      },
    },
  },
  {
    id: 3,
    password: '123456',
    profile: {
      firstName: faker.name.firstName(),
      middleName: faker.name.middleName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      role: {
        name: 'admin',
      },
      phoneNumber: {
        countryCode: 'uz',
        localNumber: '1234567',
        value: '998901234567',
      },
    },
  },
]

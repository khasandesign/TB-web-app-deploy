export const GET_CERTIFICATE = {
  method: 'get',
  url: (courseId) => `courses/${courseId}/certificate`,
  schema: {
    url: 'url',
    image: 'image',
  },
}

export const POST_CERTIFICATE = {
  method: 'post',
  url: (courseId) => `courses/${courseId}/certificate`,
  schema: {
    region: 'region',
    district: 'district',
    street: 'street',
    postalCode: 'postalCode',
    email: 'email',
    name: 'name',
    phoneNumber: 'phoneNumber',
  },
}

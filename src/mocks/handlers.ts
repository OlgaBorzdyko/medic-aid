import { http, HttpResponse } from 'msw'

const MOCK_USERS = [
  {
    id: 1,
    login: 'doctor',
    password: '123456',
    name: 'John Doe',
    avatar: '/doctor-example.png',
    role: 'doctor'
  },
  {
    id: 2,
    login: 'patient',
    password: '123456',
    name: 'Jane Smith',
    role: 'patient'
  }
]

export const handlers = [
  http.get('/doctors', () => {
    return HttpResponse.json({
      id: 1,
      name: 'John Doe'
    })
  }),
  http.get('/appointments', () => {
    return HttpResponse.json({})
  }),
  http.get('/patients', () => {
    return HttpResponse.json({})
  }),
  http.post('/login', async ({ request }) => {
    const response = await request.json()
    const { login, password } = response as {
      login: string
      password: string
    }
    const user = MOCK_USERS.find(
      (user) => user.login === login && user.password === password
    )
    if (user) {
      return HttpResponse.json(
        {
          success: true,
          token: 'mock-example-token',
          user: {
            id: user.id,
            name: user.name,
            avatar: user.avatar,
            role: user.role
          }
        },
        { status: 200 }
      )
    }
    return HttpResponse.json(
      { message: 'Invalid login or password' },
      { status: 401 }
    )
  })
]

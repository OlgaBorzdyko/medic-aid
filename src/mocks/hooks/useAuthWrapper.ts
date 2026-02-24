import { HttpResponse } from 'msw'

export const withAuth = (handler) => {
  return ({ request }) => {
    const role = request.headers.get('x-role')
    const userId = request.headers.get('x-user-id')
    if (!role || !userId)
      return HttpResponse.json({ message: 'Forbidden' }, { status: 403 })
    return handler({ userId, role, request })
  }
}

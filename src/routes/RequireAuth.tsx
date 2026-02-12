import { Navigate, Outlet } from 'react-router-dom'

import { session } from '../entities/login/session'

const RequireAuth = () => {
  const token = session.getToken()

  if (!token) {
    return <Navigate replace to="/login" />
  }

  return <Outlet />
}

export default RequireAuth

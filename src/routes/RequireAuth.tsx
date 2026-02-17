import { Navigate, Outlet } from 'react-router-dom'

import { useAuthStore } from '../store/authStore'

const RequireAuth = () => {
  const token = useAuthStore((state) => state.token)

  if (!token) {
    return <Navigate replace to="/login" />
  }

  return <Outlet />
}

export default RequireAuth

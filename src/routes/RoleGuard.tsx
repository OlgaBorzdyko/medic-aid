import React from 'react'
import { Navigate } from 'react-router-dom'

import { useAuthStore } from '../store/authStore'

type Role = 'doctor' | 'patient'
interface RoleGuardProps {
  allowedRoles: Role[]
  children: React.ReactNode
}
const RoleGuard = ({ allowedRoles, children }: RoleGuardProps) => {
  const user = useAuthStore((state) => state.user)
  if (!user) return <Navigate replace to="/login" />

  if (!allowedRoles.includes(user.role as Role)) {
    return <Navigate replace to="/" />
  }

  return <>{children}</>
}

export default RoleGuard

export const session = {
  getToken: () => sessionStorage.getItem('token'),
  setToken: (t: string) => sessionStorage.setItem('token', t),
  logout: () => sessionStorage.removeItem('token')
}

export const permissions = {
  doctor: {
    canView: ['Dashboard', 'Patients', 'Appointments', 'Notes', 'Settings'],
    canEdit: ['Appointments', 'Notes', 'Settings']
  },
  admin: {
    test: ['255']
  }
}

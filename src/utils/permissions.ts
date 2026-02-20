export const permissions = {
  doctor: {
    canView: ['Dashboard', 'Patients', 'Appointments', 'Notes', 'Settings'],
    canEdit: ['Appointments', 'Notes', 'Settings']
  },
  patient: {
    canView: ['Dashboard', 'Appointments', 'Notes', 'Settings'],
    canEdit: ['Notes', 'Settings']
  }
}

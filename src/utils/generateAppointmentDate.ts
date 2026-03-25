export const generateAppointmentDate = (appointments) => {
  return appointments.map((appointment, index) => {
    const date = new Date()
    if (index < 5) {
      // today appointments
      date.setHours(9 + index)
    } else {
      // future appointments
      date.setDate(date.getDate() + index)
      date.setHours(9 + index)
    }
  })
}

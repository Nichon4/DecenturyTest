import service from './Api'

export function fetchAllContacts() {
  return service.get('/pb')
}

export function fetchContact(id) {
  return service.get(`/pb/${id}`)
}

export function createContact(contact) {
  return service.post('/pb', contact)
}

export function updateContact(contact) {
  return service.post('/pb', contact)
}

export function deleteContact(id) {
  return service.delete(`/pb/${id}`)
}
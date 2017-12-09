export const headersWithoutAuthorization = {
  'Content-Type': 'application/json'
}

export const headersWithAuthorization = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer ' + sessionStorage.getItem('token')
}

export const baseUrl = 'http://localhost:3000'
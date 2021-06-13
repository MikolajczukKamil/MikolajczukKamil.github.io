export const api = ['localhost', '127.0.0.1', ''].includes(
  window.location.hostname
)
  ? `http://localhost:8080/`
  : `https://pwi-mvc.appspot.com/`

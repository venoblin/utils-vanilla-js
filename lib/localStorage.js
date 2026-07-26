export const storageGet = (key) => {
  const item = localStorage.getItem(key)
  return JSON.parse(item)
}

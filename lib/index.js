const sleep = (time) => {
  return new Promise((res) => setTimeout(res, time))
}

const storageGet = (key) => {
  const item = localStorage.getItem(key)
  return JSON.parse(item)
}

const storageSet = (key, item) => {
  localStorage.setItem(key, JSON.stringify(item))
}

const storageRemove = (key) => {
  localStorage.removeItem(key)
}

const getBasePathname = (pathname) => {
  if (!pathname) return ''

  const path = pathname.slice(1)
  let endIndex = 0

  if (path.indexOf('/') === -1) {
    endIndex = path.length
  } else {
    endIndex = path.indexOf('/')
  }

  const cleanedPath = `/${path.slice(0, endIndex)}`

  return cleanedPath
}

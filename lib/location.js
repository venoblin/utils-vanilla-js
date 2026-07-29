export const getBasePathname = (pathname) => {
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

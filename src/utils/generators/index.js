/**
 * @description Returns a random string.
 * @param {number} size
 * @return String
 */
const hashId = (size) => {
  if (size === undefined || typeof size !== 'number') {
    throw new Error('You must provide a number')
  }

  let tmp = ''
  const dictionary = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (let i = 0; i < size; i += 1) {
    tmp += dictionary.charAt(Math.floor(Math.random() * dictionary.length))
  }
  return tmp
}

export { hashId }

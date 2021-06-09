import { hashId } from '@/utils/generators'

describe('Generators Module', () => {
  describe('hashId method', () => {
    it('should throw an error if called without an arg', async () => {
      expect(() => hashId()).toThrow('You must provide a number')
    })

    it('should throw an error if called without a number', async () => {
      expect(() => hashId('40')).toThrow('You must provide a number')
    })

    it('should return a ramdon string with 6 characters', () => {
      expect(hashId(6).length).toBe(6)
    })

    it('should return a ramdon string with 22 characters', () => {
      expect(hashId(22).length).toBe(22)
    })
  })
})

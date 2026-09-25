
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { XenoCantoSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = XenoCantoSDK.test()
    equal(testsdk instanceof XenoCantoSDK, true,
      'XenoCantoSDK.test() must return a client synchronously')
  })

})

// This file was automatically added by layer0 deploy.
// You should commit this file to source control.
import { CustomCacheKey, Router } from '@layer0/core'

export default new Router()
  .match('/api/:endpoint', ({ cache }) => {
    cache({
      key: new CustomCacheKey().addHeader('varied'),
      browser: { maxAgeSeconds: 60 * 60 * 24 },
      edge: { maxAgeSeconds: 60 * 60 * 24 * 365 },
    })
  })
  .fallback(({ renderWithApp }) => renderWithApp())

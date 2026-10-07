import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: path.join(__dirname),
  // One product: the public discovery experience now lives at the app root. mirar.life/ leads straight into it.
  // Legal pages (/privacy, /terms, /cookies) stay here. Temporary (307) so it is trivial to reverse.
  async redirects() {
    return [{ source: '/', destination: 'https://mirar-app.vercel.app', permanent: false }]
  },
}

export default nextConfig

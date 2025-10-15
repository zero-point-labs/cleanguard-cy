// R2 Storage Configuration
// Using environment variable from .env.local
export const R2_BASE_URL = process.env.NEXT_PUBLIC_R2_BASE_URL || 'https://pub-51a9f12ba5f849fa84e85ae3de36c2c5.r2.dev'

// File paths in your R2 bucket
export const R2_ASSETS = {
  logo: `${R2_BASE_URL}/Rma%20(1).avif`,
  video: `${R2_BASE_URL}/public/cleaning.mp4`,
  aboutUsImage: `${R2_BASE_URL}/pest%20control%20team%20of%20people%20sprey%20cockroaches.avif`
}

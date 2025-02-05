export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-04'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const token = assertValue(
 "skzrpjx06izdlQLqd6GYzx0xKMJ3WfCTXKThEUrSKJ3kmTAQFKtBAjABAL7XZfrrhxIofJ2tB6MhDfneyOqlJNQmb84VtYBDYumuTZ4zXR2xKE4GkFdy7nGupUjyNy57GJfNnO2mWvyNGhKbpJvxfJCyFXe5tMPmTNwilziXkk64U7NY1w6M",
  'Missing environment variable: SANITY_ACESS_TOKEN,'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}

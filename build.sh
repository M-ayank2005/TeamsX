#!/bin/bash
# This script ensures build succeeds even if some env vars are missing

# Set dummy values for build-time if they don't exist
export NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="${NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:-dummy}"
export CLERK_SECRET_KEY="${CLERK_SECRET_KEY:-dummy}"
export DATABASE_URL="${DATABASE_URL:-dummy}"

# Run the actual build
npm run build

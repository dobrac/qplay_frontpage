#!/bin/bash
API_CLIENT_PATH="api-client"
rm -rf "${API_CLIENT_PATH:?}"/*
npx @openapitools/openapi-generator-cli generate \
   --generator-key v1.0
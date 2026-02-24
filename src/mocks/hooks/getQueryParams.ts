export const getQueryParams = (request: any) => {
  const url = new URL(request.url)
  return {
    limit: parseInt(url.searchParams.get('limit') || 10),
    offset: parseInt(url.searchParams.get('offset') || '0'),
    status: url.searchParams.get('status')
  }
}

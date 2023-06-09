interface HttpResponse {
  statusCode: number
  body: any
}

interface HttpRequest {
  body?: any
}

export type {
  HttpResponse,
  HttpRequest
}

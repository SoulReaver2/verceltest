export default function hello(request, response) {
  response.status(200).json([
    {
      body: request.body,
      query: request.query,
      cookies: request.cookies
    },
    { name: "test app" }
  ]);
}

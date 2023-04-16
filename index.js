export default {
  async fetch(request, env) {
    let route = new URL(request.url)
    let IP = route.pathname

    return new Response(IP)
  }
}
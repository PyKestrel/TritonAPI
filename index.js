export default {
  async fetch(request, env) {
    let route = new URL(request.url);
    let IP = route.pathname
    let url = "https://rdap.arin.net/registry/ip/" + IP.replace(/([()[{*+/$^\\|?])/g, '');
    const init = {
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
    };
    console.log(url)
    const response = await fetch(url, init);
    return new Response(response.body)
  }
}
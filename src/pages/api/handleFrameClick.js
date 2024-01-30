// src/pages/api/handleFrameClick.js
export async function post(request) {
  const requestData = await request.json();
  // Process requestData, verify signature, etc.

  // Return new frame metadata
  return new Response(
    `
    <!DOCTYPE html>
    <html>
      <head>
        <meta property="fc:frame" content="vNext" />
        <meta property='fc:frame:image' content='https://placehold.co/1200x630&text=test' />
        <!-- Add more meta tags as needed -->
      </head>
    </html>
  `,
    { headers: { "Content-Type": "text/html" } }
  );
}

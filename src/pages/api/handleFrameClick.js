// src/pages/api/handleFrameClick.js

// Handler for POST requests
export const POST = async ({ request }) => {
  const requestData = await request.json();
  // Process requestData, verify signature, etc.

  // Return new frame metadata
  return new Response(
    `
    <!DOCTYPE html>
    <html>
      <head>
        <meta property="fc:frame" content="vNext" />
        <meta property='fc:frame:image' content='https://placehold.co/1200x630?text=test' />
        <!-- Add more meta tags as needed -->
      </head>
    </html>
    `,
    { headers: { "Content-Type": "text/html" } }
  );
};

// Handler for GET requests (optional)
export const GET = async () => {
  // Return a simple message or handle accordingly
  return new Response("This endpoint is for POST requests only.", { status: 200 });
};

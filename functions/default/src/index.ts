import {
  CloudFrontFunctionsEvent,
  APIGatewayProxyResult
} from 'aws-lambda';

// Default starter
export const handler = async(
  event: CloudFrontFunctionsEvent
): Promise<APIGatewayProxyResult> => {
  console.log('Event : ', JSON.stringify({
    event,
  }, null, 4));
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: `<html>
      <body>
        <p>Hello there </p>
      </body>
    </html>`,
  };
}

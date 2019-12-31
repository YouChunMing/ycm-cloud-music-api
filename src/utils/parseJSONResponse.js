export default function parseJSONResponse(response) {
    if (typeof response === 'string') {
      return JSON.parse(response);
    }
    return response;
}
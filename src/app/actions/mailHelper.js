export default function parseResponse(responses) {
  return responses.every((element) => {
    if (element[0].statusCode != 202) {
      // send actually returns an array
      console.log(element);
      return false;
    }

    return true;
  });
}

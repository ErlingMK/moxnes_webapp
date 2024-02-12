export default function parseResponse(responses) {
  return responses.every((element) => {
    if (element[0].statusCode != 202) {
      // send actually returns an array
      console.log(element);
      return false;
    }

    console.log(responses);
    //todo: log error
    throw new Error("Unable to send mail");
  });
}

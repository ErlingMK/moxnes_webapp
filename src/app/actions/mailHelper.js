export default function parseResponse(responses) {
  const result = responses.every((element) => {
    if (element[0].statusCode != 202) {
      // send actually returns an array
      return false;
    }
    return true;
  });

  if (!result) {
    //todo: log rror
    console.log(responses);
    throw new Error("Unable to send mail");
  }
}

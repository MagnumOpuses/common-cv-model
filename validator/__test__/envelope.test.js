const { validate } = require("../validator");

test("example_WithHROpen421JSON.json", (done) => {
  return validate(
    "../envelope/example_WithHROpen421JSON.json",
    "../envelope/DataEnvelope.json"
  ).then((result) => {
    console.log(result.errors);
    expect(result.errors.length).toBe(0);
    done();
  });
});

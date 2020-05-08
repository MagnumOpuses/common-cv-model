const { validate } = require("../validator");

test("example_WithHROpen421.json", (done) => {
  return validate(
    "../envelope/example_WithHROpen421.json",
    "../envelope/DataEnvelope.json"
  ).then((result) => {
    expect(result.errors.length).toBe(0);
    done();
  });
});

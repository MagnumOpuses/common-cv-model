const { validate } = require("../validator");

test("example1.json", done => {
  return validate(
    "../envelope/example1.json",
    "../envelope/DataEnvelope.json"
  ).then(result => {
    expect(result.errors.length).toBe(0);
    done();
  });
});

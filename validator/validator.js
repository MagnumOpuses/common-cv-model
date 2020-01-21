var Validator = require("jsonschema").Validator;
let refParser = require("json-schema-ref-parser");

exports.validate = (instanceFilepath, schemaFilepath) => {
  return refParser.dereference(schemaFilepath, {}).then(dereferencedSchema => {
    return new Validator().validate(
      require(instanceFilepath),
      dereferencedSchema
    );
  });
};

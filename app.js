var Validator = require('jsonschema').Validator;
  var instance = {
      "validateRequiredProperties1": {
        "propA": "a string",
      "propB": "a string"
    },
    "validateRequiredProperties2": {
      "propA": 6,
      "propB": "a string"
    }
  }

 var schema = { 
 "id":"/All",
 "type":"object",
 "properties": {
        "validateRequiredProperties1": {
          "type": "object",
          "required": [
            "propA",
            "propB"
          ]
        },
        "validateRequiredProperties2": {
          "type": "object",
          "properties": {
            "propA": {
              "required": true
            },
            "propB": {
              "required": true
            }
          }
        }
      }
    }

var v = new Validator();
//v.validate(instances, sc);
/*
var x = instances.validateRequiredProperties1.propA;
console.log(x);
console.log(typeof x);
let z;
y = 'haha';
if (x === null || typeof x == 'undefined') {
    z = y;
}
console.log(z)
*/

//console.log(v.validate(instance, schema));
console.log(v.validate(instance, schema).errors)

//var instance = 4;
//var schema = {"type": "number"};

//console.log(v.validate(instance, sc));

/*

  // If the schema declares a type and the property fails type validation.
  if (schema.type && this.attributes.type.call(this, instance, schema, options, ctx.makeChild(schema, property))) {
    var types = (schema.type instanceof Array) ? schema.type : [schema.type];
    var coerced = undefined;
 
    // Go through the declared types until we find something that we can
    // coerce the value into.
    for (var i = 0; typeof coerced == 'undefined' && i < types.length; i++) {
      // If we support coercion to this type
      if (lib.coercions[types[i]]) {
        // ...attempt it.
        coerced = lib.coercions[types[i]](value);
      }
    }
    // If we got a successful coercion we modify the property of the instance.
    if (typeof coerced != 'undefined') {
      instance[property] = coerced;
    }
  }
}.bind(validator)
 
// And now, to actually perform validation with the coercion hook!
v.validate(instance, schema, { preValidateProperty: coercionHook });
*/
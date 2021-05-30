// source: v3/bar.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.Address', null, global);
goog.exportSymbol('proto.Bar', null, global);
goog.exportSymbol('proto.Bar.LocationCase', null, global);
goog.exportSymbol('proto.PricePoint', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Bar = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.Bar.oneofGroups_);
};
goog.inherits(proto.Bar, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Bar.displayName = 'proto.Bar';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Address = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Address, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Address.displayName = 'proto.Address';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.Bar.oneofGroups_ = [[5, 6]];

/**
 * @enum {number}
 */
proto.Bar.LocationCase = {
  LOCATION_NOT_SET: 0,
  PLUS_CODE: 5,
  ADDRESS: 6,
};

/**
 * @return {proto.Bar.LocationCase}
 */
proto.Bar.prototype.getLocationCase = function () {
  return /** @type {proto.Bar.LocationCase} */ (
    jspb.Message.computeOneofCase(this, proto.Bar.oneofGroups_[0])
  );
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.Bar.prototype.toObject = function (opt_includeInstance) {
    return proto.Bar.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.Bar} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.Bar.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        id: jspb.Message.getFieldWithDefault(msg, 1, 0),
        pricepoint: jspb.Message.getFieldWithDefault(msg, 2, 0),
        capacity: jspb.Message.getFieldWithDefault(msg, 3, 0),
        name: jspb.Message.getFieldWithDefault(msg, 4, ''),
        plusCode: jspb.Message.getFieldWithDefault(msg, 5, ''),
        address:
          (f = msg.getAddress()) && proto.Address.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Bar}
 */
proto.Bar.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Bar();
  return proto.Bar.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Bar} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Bar}
 */
proto.Bar.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readUint32());
        msg.setId(value);
        break;
      case 2:
        var value = /** @type {!proto.PricePoint} */ (reader.readEnum());
        msg.setPricepoint(value);
        break;
      case 3:
        var value = /** @type {number} */ (reader.readUint32());
        msg.setCapacity(value);
        break;
      case 4:
        var value = /** @type {string} */ (reader.readString());
        msg.setName(value);
        break;
      case 5:
        var value = /** @type {string} */ (reader.readString());
        msg.setPlusCode(value);
        break;
      case 6:
        var value = new proto.Address();
        reader.readMessage(value, proto.Address.deserializeBinaryFromReader);
        msg.setAddress(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Bar.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.Bar.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Bar} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Bar.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(1, f);
  }
  f = message.getPricepoint();
  if (f !== 0.0) {
    writer.writeEnum(2, f);
  }
  f = message.getCapacity();
  if (f !== 0) {
    writer.writeUint32(3, f);
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(4, f);
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(5, f);
  }
  f = message.getAddress();
  if (f != null) {
    writer.writeMessage(6, f, proto.Address.serializeBinaryToWriter);
  }
};

/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.Bar.prototype.getId = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.Bar} returns this
 */
proto.Bar.prototype.setId = function (value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * optional PricePoint pricePoint = 2;
 * @return {!proto.PricePoint}
 */
proto.Bar.prototype.getPricepoint = function () {
  return /** @type {!proto.PricePoint} */ (
    jspb.Message.getFieldWithDefault(this, 2, 0)
  );
};

/**
 * @param {!proto.PricePoint} value
 * @return {!proto.Bar} returns this
 */
proto.Bar.prototype.setPricepoint = function (value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};

/**
 * optional uint32 capacity = 3;
 * @return {number}
 */
proto.Bar.prototype.getCapacity = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};

/**
 * @param {number} value
 * @return {!proto.Bar} returns this
 */
proto.Bar.prototype.setCapacity = function (value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};

/**
 * optional string name = 4;
 * @return {string}
 */
proto.Bar.prototype.getName = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ''));
};

/**
 * @param {string} value
 * @return {!proto.Bar} returns this
 */
proto.Bar.prototype.setName = function (value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};

/**
 * optional string plus_code = 5;
 * @return {string}
 */
proto.Bar.prototype.getPlusCode = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ''));
};

/**
 * @param {string} value
 * @return {!proto.Bar} returns this
 */
proto.Bar.prototype.setPlusCode = function (value) {
  return jspb.Message.setOneofField(this, 5, proto.Bar.oneofGroups_[0], value);
};

/**
 * Clears the field making it undefined.
 * @return {!proto.Bar} returns this
 */
proto.Bar.prototype.clearPlusCode = function () {
  return jspb.Message.setOneofField(
    this,
    5,
    proto.Bar.oneofGroups_[0],
    undefined
  );
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Bar.prototype.hasPlusCode = function () {
  return jspb.Message.getField(this, 5) != null;
};

/**
 * optional Address address = 6;
 * @return {?proto.Address}
 */
proto.Bar.prototype.getAddress = function () {
  return /** @type{?proto.Address} */ (
    jspb.Message.getWrapperField(this, proto.Address, 6)
  );
};

/**
 * @param {?proto.Address|undefined} value
 * @return {!proto.Bar} returns this
 */
proto.Bar.prototype.setAddress = function (value) {
  return jspb.Message.setOneofWrapperField(
    this,
    6,
    proto.Bar.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.Bar} returns this
 */
proto.Bar.prototype.clearAddress = function () {
  return this.setAddress(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Bar.prototype.hasAddress = function () {
  return jspb.Message.getField(this, 6) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.Address.prototype.toObject = function (opt_includeInstance) {
    return proto.Address.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.Address} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.Address.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        streetName: jspb.Message.getFieldWithDefault(msg, 1, ''),
        zipCode: jspb.Message.getFieldWithDefault(msg, 2, 0),
        city: jspb.Message.getFieldWithDefault(msg, 3, ''),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Address}
 */
proto.Address.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Address();
  return proto.Address.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Address} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Address}
 */
proto.Address.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setStreetName(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readUint32());
        msg.setZipCode(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setCity(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Address.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.Address.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Address} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Address.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getStreetName();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getZipCode();
  if (f !== 0) {
    writer.writeUint32(2, f);
  }
  f = message.getCity();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
};

/**
 * optional string street_name = 1;
 * @return {string}
 */
proto.Address.prototype.getStreetName = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.Address} returns this
 */
proto.Address.prototype.setStreetName = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional uint32 zip_code = 2;
 * @return {number}
 */
proto.Address.prototype.getZipCode = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.Address} returns this
 */
proto.Address.prototype.setZipCode = function (value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};

/**
 * optional string city = 3;
 * @return {string}
 */
proto.Address.prototype.getCity = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.Address} returns this
 */
proto.Address.prototype.setCity = function (value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * @enum {number}
 */
proto.PricePoint = {
  PRICE_POINT_UNDEFINED: 0,
  PRICE_POINT_DIVE: 1,
  PRICE_POINT_MEDIUM: 2,
  PRICE_POINT_HIGH: 3,
};

// goog.object.extend(exports, proto);
module.exports = { ...goog, ...proto };

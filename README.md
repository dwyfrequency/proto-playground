# proto-playground

// update final line of compiled files

```
// Comment out -> goog.object.extend(exports, proto);
// Add the below
module.exports = { ...goog, ...proto }
```

```
// vscode settings
"protoc": {
    "compile_on_save": true,
    "options": [
      "--proto_path=protos/v3",
      "--proto_path=${workspaceRoot}/protos",
      "--js_out=import_style=commonjs,binary:build/gen"
    ]
  }
```

import { getOptions } from "loader-utils";
import path from "path";
import Banana from "banana-i18n";
var fs = require("fs");

export default function(sourceContent) {
  const options = getOptions(this);
  const dir = path.dirname(this.resourcePath);
  const langugageCode = path.basename(this.resourcePath).split(".json")[0];
  const fallbackLocales = new Banana(langugageCode).getFallbackLocales();
  let resolvedMessages = JSON.parse(sourceContent);
  for (let i = 0; i < fallbackLocales.length; i++) {
    const fileContent = fs.readFileSync(
      path.join(`${dir}`, `${fallbackLocales[i]}.json`),
      "utf8"
    );
    resolvedMessages = Object.assign(JSON.parse(fileContent), resolvedMessages);
  }
  return JSON.stringify(resolvedMessages);
}

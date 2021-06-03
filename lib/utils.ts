import {Validation} from "io-ts";
import reporter from "io-ts-reporters";

export const logErrors = (
  id: string,
  validation: Validation<unknown>,
): void => {
  const errors = reporter.report(validation).map((line) => `\t${line}`);
  console.error(`Error validating ${id}:`);
  console.error(errors.join("\n"));
};

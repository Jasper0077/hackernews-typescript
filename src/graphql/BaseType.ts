import { interfaceType } from "nexus";

export const BaseType = interfaceType({
  name: "BaseType",
  definition(t) {
    t.nonNull.int("id", { description: "Unique identifier for the resource" });
  },
});

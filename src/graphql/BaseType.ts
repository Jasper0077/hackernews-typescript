import { interfaceType } from "nexus";

export const BaseType = interfaceType({
  name: "BaseType",
  definition(t) {
    t.id("id", { description: 'Unique identifier for the resource' });
  }
});
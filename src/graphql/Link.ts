import { objectType, interfaceType } from "nexus";
import { BaseType } from "./BaseType";

export const Link = objectType({
  name: "Link",
  definition(t) {
    t.implements(BaseType);
    t.nonNull.string("description");
    t.nonNull.string("url");
  },
});
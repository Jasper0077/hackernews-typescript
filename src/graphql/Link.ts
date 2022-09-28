import { extendType, intArg, nonNull, objectType, stringArg } from "nexus";
import { NexusGenObjects } from "../../nexus-typegen";
import { BaseType } from "./BaseType";

export const Link = objectType({
  name: "Link",
  definition(t) {
    t.implements(BaseType);
    t.nonNull.string("description");
    t.nonNull.string("url");
  },
});

let links: Array<NexusGenObjects["Link"]> = [
	{
		id: 1,
		url: "www.howtographql.com",
		description: "Fullstack tutorial for GraphQL",
	},
	{
		id: 2,
		url: "graphql.org",
		description: "GraphQL official website",
	},
];

export const LinkQuery = extendType({
	type: "Query",
	definition(t) {
		t.nonNull.list.nonNull.field("feed", {
			type: "Link",
			resolve(parent, args, context, info) {
				return links;
			},
		});
	},
});

export const LinkMutation = extendType({
	type: "Mutation",
	definition(t) {
		t.nonNull.field("post", {
			type: "Link",
			args: {
				description: nonNull(stringArg()),
				url: nonNull(stringArg())
			},
			resolve(parent, args, context) {
				const { description, url } = args;
				let idCount = links.length + 1
				const link = {
					id: idCount,
					description,
					url
				};
				links.push(link);
				return link;
			}
		});
	}
});

export const LinkQueryById = extendType({
	type: "Mutation",
	definition: (t) => {
		t.field("link", {
			type: "Link",
			args: {
				id: nonNull(intArg()),
			},
			resolve(parent, args, context, info) {
				const { id } = args;
				const link = links.find((link) => link.id === id);
				return link || null;
			}
		});
	}
});

export const LinkDeleteById = extendType({
	type: "Mutation",
	definition: (t) => {
		t.field("deleteLink", {
			type: "Link",
			args: {
				id: nonNull(intArg()),
			},
			resolve(parent, args, context, info) {
				const { id } = args;
				const index = links.findIndex((link) => link.id === id);
				const returnedLink = links[index];
				links.splice(index, 1);
				return index > -1 ? returnedLink : null;
			}
		});
	}
});
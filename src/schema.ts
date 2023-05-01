import { schemaComposer } from "graphql-compose";

schemaComposer.Query.addFields({
  hello: {
    resolve: () => "World",
    type: "String!",
  },
});

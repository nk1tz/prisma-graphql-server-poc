## POC Graphql server API resolvers bound to prisma layer on top of sql db.

This POC implements the basic datamodel needed for a blogging platform.

## How to run the project.
1. Clone the repo and navigate to project root.
2. Install dependencies with ```yarn```.
3. Deploy the 'dev' prisma db service with ```prisma deploy```. This will spin up a sandbox prisma server on prisma cloud.
4. Run the graphql server locally: ```node src/index.js```
5. Run the graphql playground with ```graphql playground```

### Exploring the playground
On the left hand side of the graphql playground you will notice that you can switch between the graphql server and the prisma server.
If you select "app" you will able to introspect and query against the graphql server resolvers defined in `src/scheme.graphql`.
If you select prisma you will be able to introspect and query agains the prisma server directly which contains all the possible db interactions avaiable for the datamodel defined in `prisma/datamodel.graphql`.

#### Challenge: In the playground, using the graphql server ("app"), try to:
- sign up a new user while having the ID returned.
- using the ID, create a new draft.
- query for all posts containing a keyword you know you included in your draft "content".
- finally publish the draft.

The scheme introspect tab on the right hand side will be your best friend while attempting to do this and much much more.

:)
## POC Graphql server API resolvers bound to prisma layer on top of sql db.

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
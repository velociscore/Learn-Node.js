## Schema

--> Schema defines structure,rules,and data types of documents in a mongoDb collection.
(eg. required fields,unique values )
--> Schemas are created using mongoose.Schema and are not directly tied to the database until compiled into a model.
--> Schema is used to create the model.

## Model

--> Model is compiled version of schema that provides an interface to interact with a specific mongoDb collection.
--> Allows you to perform CRUD operations.
--> Model is essentially is a class that maps to a MongoDb collection and instances of model represents individual documents.
--> Model inherits mongoose methods e.g. save(),find() etc to interact with database.

## Model and Schema

--> Schema alone is just a defination it cannot interact with database,compiling it into a model creates usable interface for mongoDb operations.
--> Model bridges gap between your js code and MongoDb database,

## Why mongoose?

--> Mongoose is library , followed standard to make schemas and talk to mongoDb database, enforces data validations and more...

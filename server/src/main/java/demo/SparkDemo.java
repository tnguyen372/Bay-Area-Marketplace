package demo;

import static spark.Spark.*;
import static com.mongodb.client.model.Filters.*;


import com.google.gson.Gson;
import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
//import com.sun.tools.javac.util.List;
import java.util.ArrayList;
import java.util.List;

import org.bson.Document;

public class SparkDemo {

  static Gson gson = new Gson();

  public static void main(String[] args) {
    port(1237);
    webSocket("/ws", WebSocketHandler.class);

    // open mongo connection
    MongoClient mongoClient = new MongoClient("localhost", 27017);
    // get reference to database
    MongoDatabase db = mongoClient.getDatabase("MyDatabase");
    // get reference to collection
    MongoCollection<Document> myCollection = db.getCollection("myCollection");

    // create a listing
    post("/postListing", (req, res) -> {
      // generate id
      String entryId = String.valueOf(Math.random());
      // listing object
      ListingDto listingDto = gson.fromJson(req.body(), ListingDto.class);

      Document doc = new Document("entryId", entryId)
              .append("email", listingDto.email)
              .append("title", listingDto.title)
              .append("type", listingDto.type)
              .append("description", listingDto.description)
              .append("price", listingDto.price);

      myCollection.insertOne(doc);
      System.out.println("Post " + entryId + " was created successfully");

      List<Document> listingList = myCollection.find().into(new ArrayList<Document>());
      WebSocketHandler.broadcast(gson.toJson(listingList));
      return myCollection.countDocuments();
    });

    // delete listing
    delete("/deleteListing", (req, res) -> {
      String entryId = req.queryMap("entryId").value();
      myCollection.deleteOne(eq("entryId", entryId));
      System.out.println("Post " + entryId + " was deleted successfully");
      return myCollection.countDocuments();
    });

    // view listings
    get("/viewListings", (req, res) -> {
      List<Document> listingList = myCollection.find().into(new ArrayList<Document>());
      return gson.toJson(listingList);
    });

    // get listings with given email
    get("/user", (req, res) -> {
      ListingDto listingDto = gson.fromJson(req.body(), ListingDto.class);
      List<Document> listingList = myCollection.find(eq("email", listingDto.email)).into(new ArrayList<Document>());
      return gson.toJson(listingList);
    });
  }
}

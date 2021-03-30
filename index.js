require("dotenv").config();
var faunadb = require("faunadb"),
  q = faunadb.query;

(async () => {
  try {
    var adminClient = new faunadb.Client({ secret: process.env.DB_KEY });
    const result = await adminClient
      .query
      // ========================================
      // create a collection
      // q.CreateCollection({ name: "messages" })

      // create index
      // q.CreateIndex({
      //   name: "message_by_title",
      //   source: q.Collection("messages"),
      //   terms: [{ field: ["data", "title"] }],
      // })

      // add data
      // q.Create(q.Collection("messages"), {
      //   data: { title: "Hello Friend How are You" },
      // })

      // add multiple data
      // q.Map(
      //   [
      //     "My name is Muhammad Uzair",
      //     "I am Full STack Developer",
      //     "And Jam Stack Developer",
      //   ],
      //   q.Lambda(
      //     "message_by_title",
      //     q.Create(q.Collection("messages"), {
      //       data: { title: q.Var("message_by_title") },
      //     })
      //   )
      // )

      // get data
      // q.Get(q.Ref(q.Collection("messages"), "294454935192338951"))

      // update post
      // q.Update(q.Ref(q.Collection("messages"), "294454935192338951"), {
      //   data: { title: "I am JAM Stack Serverless Developer." },
      // })

      // replace data
      // q.Replace(q.Ref(q.Collection("messages"), "294454935192338951"), {
      //   data: { hobbies: ["developer", "programmer"] },
      // })

      // delete post
      // q.Delete(q.Ref(q.Collection("messages"), "294454935192338951"))
      ();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
})();

import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { sampleBooks } from "@/constants";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import React from "react";

const page = async () => {
  const result = await db.select().from(users);
  console.log(result)
  return (
    <>
      <BookOverview {...sampleBooks[0]} />
      <BookList
        title="Latest Book"
        books={sampleBooks}
        containerClassName="mt-28"
      />
    </>
  );
};

export default page;

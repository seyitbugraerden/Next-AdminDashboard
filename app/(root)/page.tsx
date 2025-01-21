import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { sampleBooks } from "@/constants";
import React from "react";

const page = () => {
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

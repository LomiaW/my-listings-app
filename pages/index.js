import useSWR from "swr";
import Error from "next/error";
import { useState, useEffect } from "react";
import { Pagination, Accordion } from "react-bootstrap";
import ListingDetails from "@/components/ListingDeails";
import PageHeader from "@/components/PageHeader";

export default function Home() {
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);
  const { data, error } = useSWR(`${process.env.LISTING_API_URL}/api/listings?page=${page}&perPage=10`);

  const previous = () => setPage(page - 1);
  const next = () => setPage(page + 1);

  useEffect(() => {
    if (data) {
      setPageData(data);
    }
  }, [data]);

  // If we have an "error" (SWR), return Error 404.   
  if (error) return <Error statusCode={404} />;

  return (
    <>
      <PageHeader text="Browse Listings : Sorted by Number of Ratings" />
      <Accordion>
        {pageData.map((listing) => (
          <Accordion.Item key={listing._id} eventKey={listing._id}>
            <Accordion.Header>
              <b>{listing.name}</b> &nbsp; {listing.address.street}
            </Accordion.Header>
            <Accordion.Body>
              <ListingDetails key={listing._id} listing={listing} />
            </Accordion.Body> 
          </Accordion.Item>
        ))}
      </Accordion>  
      <Pagination>
        <Pagination.Prev onClick={previous} disabled={page === 1} />
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={next} />
      </Pagination>
    </>
  );
}

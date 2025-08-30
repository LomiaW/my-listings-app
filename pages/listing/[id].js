import Error from "next/error";
import { useRouter } from "next/router";
import useSWR from "swr";
import ListingDetails from "@/components/ListingDeails";
import PageHeader from "@/components/PageHeader";

export default function Listing() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isLoading } = useSWR(`${process.env.LISTING_API_URL}/api/listings/${id}`);
 
  // If the page is still loading, return null.  
  if (isLoading) return null;

  // If we have an "error" (SWR) or that the "data" returned is valid, return Error 404.   
  if (error || !data) return <Error statusCode={404} />;

  return (
    <>
      <PageHeader text={data.name}/> 
      <ListingDetails listing={data} />
    </>
  );
}
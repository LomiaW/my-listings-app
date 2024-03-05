import { Card } from 'react-bootstrap';
import Link from 'next/link';
import ListingDetails from '@/components/ListingDeails';
import PageHeader from '@/components/PageHeader';

//This function will fetch data from an external API and pass it to the page via props
export async function getStaticProps() {
  const res = await fetch('https://dull-jade-rhinoceros-slip.cyclic.app/api/listings/16050172');
  const data = await res.json()

  return { props: { listing: data } };
}

export default function About(props) {
  return (
    <>
      <PageHeader text="About the Developer : Lomia Wu" />
      <Card>
        <Card.Body>
          <p>Hi, I&apos;m Lomia Wu, a full-stack developer with a passion for building web applications.</p> 
          <p>I have experience with a variety of technologies, including JavaScript, React, Next.js, Node.js, and MongoDB. </p>
          <p>I&apos;m excited to be working on this project and look forward to sharing my work with you.</p>
          <p>One of the places that I would like to visit is the: &quot;<Link href="/listing/16050172">Beautiful Flat in Downtown Montréal</Link>&quot;(Airbnb).
          </p>
        </Card.Body>
        <ListingDetails listing={props.listing} />
      </Card>
    </>
  );
}
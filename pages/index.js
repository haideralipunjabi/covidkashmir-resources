import Grid from "../components/grid";
import Tiles from "../components/tiles";
import { fetchData } from "../lib/lib";
import { useRouter } from "next/router";

export default function Home(props) {
  const { data }= props;
  const router = useRouter();

  return (
    <>
      <Tiles/>
      <Grid data={data} searchQuery={router.query.search} />
    </>
  );
}

export async function getStaticProps(context) {
  const data = (await fetchData()) || []
  data.reverse()
  return {
    props: {
      data
    }
  }
}
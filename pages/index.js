import Grid from "../components/grid";
import { fetchData } from "../lib/lib";
export default function Home(props) {
  const { data }= props;
  return (
      <Grid data={data}/>
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
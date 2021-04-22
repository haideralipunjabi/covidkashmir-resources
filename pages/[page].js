import { useRouter } from "next/router";
import Grid from "../components/grid";
import { fetchData, getPaths } from "../lib/lib";

export default function Page(props) {
  const router = useRouter();
  const { page } = router.query;
  const { data } = props;
  return (
    <>
      <Head>
        <title>{`${
          page[0].toUpperCase() + page.slice(1)
        } | Resource Tracker`}</title>
      </Head>
      <Grid data={data} type={page} />
    </>
  );
}
export async function getStaticProps(context) {
  const data = (await fetchData()) || [];
  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: await getPaths(),
    fallback: false,
  };
}

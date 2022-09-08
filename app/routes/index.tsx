import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Live Preview
      </h1>

      <Link prefetch="intent" to={`/livePreview`}>
        Live Preview Link
      </Link>
    </>
  );
}

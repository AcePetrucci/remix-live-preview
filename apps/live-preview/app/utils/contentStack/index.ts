import getEntry from "./getEntry";

export const livePreviewQuery = async (url: string) => {
  const { searchParams } = new URL(url);

  const lpQuery = {
    live_preview: searchParams.get("live_preview") as string,
    content_type_uid: searchParams.get("content_type_uid") as string,
  };

  Stack.livePreviewQuery(lpQuery);

  const entry = lpQuery.content_type_uid
    ? await getEntry({
        contentTypeUid: lpQuery.content_type_uid,
        stack: Stack,
      })
    : [[]];

  return { entry: entry[0][0], contentTypeUid: lpQuery.content_type_uid };
};

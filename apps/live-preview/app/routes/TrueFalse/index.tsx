import { useLivePreviewContext } from "~/utils/contentStack/livePreviewContext";

export default function TrueOrFalsePreview() {
  const { entry } = useLivePreviewContext();

  return <h4> True or False </h4>;
}

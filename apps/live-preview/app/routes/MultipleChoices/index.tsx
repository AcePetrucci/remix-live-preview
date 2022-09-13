import { useLivePreviewContext } from "~/utils/contentStack/livePreviewContext";

export default function MultipleChoicesPreview() {
  const { entry } = useLivePreviewContext();

  return <h4> MultipleChoices </h4>;
}

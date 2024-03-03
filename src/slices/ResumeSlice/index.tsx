import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ResumeSlice`.
 */
export type ResumeSliceProps = SliceComponentProps<Content.ResumeSliceSlice>;

/**
 * Component for "ResumeSlice" Slices.
 */
const ResumeSlice = ({ slice }: ResumeSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for resume_slice (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ResumeSlice;

import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Resumeview`.
 */
export type ResumeviewProps = SliceComponentProps<Content.ResumeviewSlice>;

/**
 * Component for "Resumeview" Slices.
 */
const Resumeview = ({ slice }: ResumeviewProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicNextLink field={slice.primary.resume_pdf} className="text-center">Link</PrismicNextLink>
    </section>
  );
};

export default Resumeview;



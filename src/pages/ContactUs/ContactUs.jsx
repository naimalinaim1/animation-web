import { lazy, Suspense } from "react";

const ContactUsBanner = lazy(() =>
  import("./section/ContactUsBanner/ContactUsBanner")
);
const ContactUsCalendar = lazy(() =>
  import("./section/ContactUsCalendar/ContactUsCalendar")
);
const ContactUsDiscuss = lazy(() =>
  import("./section/ContactUsDiscuss/ContactUsDiscuss")
);
const ContactUsFaq = lazy(() => import("./section/ContactUsFaq/ContactUsFaq"));

const ContactUs = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <ContactUsBanner />
        <ContactUsCalendar />
        <ContactUsDiscuss />
        <ContactUsFaq />
      </div>
    </Suspense>
  );
};

export default ContactUs;

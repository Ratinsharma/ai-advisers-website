/** Company enquiries open the visitor's own email program. No network request. */
export type CompanyEnquiry = {
  name: string;
  company: string;
  title: string;
  email: string;
  phone?: string;
  message?: string;
};

export function companyEnquiryMailto(enquiry: CompanyEnquiry): string {
  const body = [
    "Full name: " + enquiry.name,
    "Company: " + enquiry.company,
    "Position / title: " + enquiry.title,
    "Email: " + enquiry.email,
    "Phone: " + (enquiry.phone ?? ""),
    "",
    "Special instructions / message: " + (enquiry.message ?? ""),
  ].join("\r\n");
  return (
    "mailto:kenn.joyce@aiadvisers.io?subject=" +
    encodeURIComponent("AI Advisers enquiry") +
    "&body=" +
    encodeURIComponent(body)
  );
}

import assert from "node:assert/strict";
import { companyEnquiryMailto } from "../src/lib/enquiry";

const base = { name: "Jane", company: "Example", title: "Director", email: "jane@example.invalid" };
const draft = new URL(companyEnquiryMailto(base));
assert.equal(draft.protocol, "mailto:");
assert.equal(draft.pathname, "kenn.joyce@aiadvisers.io");
assert.deepEqual([...draft.searchParams.keys()], ["subject", "body"]);
assert.equal(draft.searchParams.get("subject"), "AI Advisers enquiry");
assert.ok(draft.searchParams.get("body")?.includes("Position / title: Director"));
assert.ok(draft.searchParams.get("body")?.includes("Email: jane@example.invalid"));
console.log("PASS published address and email draft fields");

const message = "Policy & onboarding? + 32 languages\nBcc: nobody@example.invalid";
const special = new URL(
  companyEnquiryMailto({
    ...base,
    name: "Zoë O’Neill",
    company: "A & B",
    title: "HR + Operations",
    message,
  }),
);
assert.ok(special.searchParams.get("body")?.includes("Zoë O’Neill"));
assert.ok(special.searchParams.get("body")?.includes("A & B"));
assert.ok(special.searchParams.get("body")?.includes(message));
assert.equal(special.searchParams.has("bcc"), false);
assert.equal(special.searchParams.has("cc"), false);
console.log("PASS Unicode and query/header injection protection");
assert.ok(!draft.searchParams.get("body")?.includes("undefined"));
assert.equal(draft.searchParams.has("attachment"), false);
console.log("PASS optional fields and no attachment");

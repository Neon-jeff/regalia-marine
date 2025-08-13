"use server";
import { AuroraFormSchema } from "@/schemas/aurora-register";

const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_KEY || '',
});

export async function UploadToNotionDB(
  data: AuroraFormSchema & { paymentRef: string }
) {
  const req_body = {
    parent: {
      type: "database_id",
      database_id: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID || '',
    },
    properties: {
      "First Name": {
        rich_text: [
          {
            text: {
              content: data.first_name,
            },
          },
        ],
      },
      "Last Name": {
        rich_text: [
          {
            text: {
              content: data.last_name,
            },
          },
        ],
      },
      "Email Address": {
        email: data.email,
      },
      "Institution": {
        rich_text: [
          {
            text: {
              content: data.tertiary_institution,
            },
          },
        ],
      },
      "Payment Ref": {
        rich_text: [
          {
            text: {
              content: data.paymentRef,
            },
          },
        ],
      },
      Role: {
        rich_text: [
          {
            text: {
              content: data.role,
            },
          },
        ],
      },
      Company: {
        rich_text: [
          {
            text: {
              content: data.company,
            },
          },
        ],
      },
      "Social URL": {
        url: data.social_media,
      },
    },
  };
  try {
    const response = await notion.pages.create(req_body)
    console.log("Notion response:", response);
  } catch (error) {
    console.error("Error uploading to Notion:", error);
    throw new Error("Failed to upload data to Notion");
  }
}

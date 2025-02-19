import {Rule} from 'sanity'

export const categories = {
  name: "category",
  title: "Categories",
  type: "document",
  fields: [
    {
      name:"name",
      title:"Name",
      type:"string",
      validation:(rule:Rule)=>rule.required().error("This field is required")
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      validation:(rule:Rule)=>rule.required().error("This field is required")
    },
  ],
};

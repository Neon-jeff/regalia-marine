import {Rule} from 'sanity'

export const post = {
  name: "posts",
  title: "Posts",
  type: "document",
  fields: [
    {
      name:"author",
      title:"Author",
      type:"string",
      validation:(rule:Rule)=>rule.required().error("This field is required")
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation:(rule:Rule)=>rule.required().error("This field is required")
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation:(rule:Rule)=>rule.required().error("This field is required")
    },
    {
      name: "dateCreated",
      title: "Date Created",
      type: "datetime",
      initialValue: ()=> new Date().toISOString()
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation:(rule:Rule)=>rule.required().error("This field is required")

    },
    {
      name:'coverimage',
      title:'Cover Image',
      type:'image'
    },
    {
      name:'youtubelink',
      title:'Youtube Link',
      type:'string'
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      validation:(rule:Rule)=>rule.required().error("This field is required"),
      of: [
        { type: "block" },
        {
          type: "image",
          fields: [{ type: "text", name: "alt", title: "Alt" }],
        },
      ],
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      validation:(rule:Rule)=>rule.required().error("This field is required"),
      to: [{type:'category'}],
    },
  ],
};

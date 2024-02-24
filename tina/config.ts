import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "home",
        label: "Home Page",
        path: "content/english",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "*_index*",
        },

        fields: [
          {
            type: "object",
            name: "banner",
            label: "Home Header Section",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
                isTitle: true,
                required: true,
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle",
              },
              {
                type: "string",
                name: "description",
                label: "description",
              },

              {
                type: "object",
                name: "button",
                label: "Quote button",
                fields: [

                  {
                    type: "boolean",
                    name: "enable",
                    label: "Enable Section",
                  },
                  {
                    type: "string",
                    name: "label",
                    label: "Quote button label",
                  },
                  {
                    type: "string",
                    name: "icon",
                    label: "icon",
                  },
                  {
                    type: "string",
                    name: "link",
                    label: "icon",
                  },

                ],

              },

              {
                type: "object",
                name: "video_button",
                label: "Video button",
                fields: [

                  {
                    type: "boolean",
                    name: "enable",
                    label: "Enable Section",
                  },
                  {
                    type: "string",
                    name: "label",
                    label: "label",
                  },
                  {
                    type: "string",
                    name: "video_url",
                    label: "Video URL",
                  },


                ],

              },

            ],

          },
          // brands
          {
            type: "object",
            name: "brands",
            label: "Brands Section",
            fields: [
              {
                type: "boolean",
                name: "enable",
                label: "Enable Section",
              },
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "images",
                label: "Brand Images",
                list: true
              },
              // Add other brands fields as needed
            ],

          },
          // fun facts

          {
            type: "object",
            name: "fun_facts",
            label: "Fun Facts",
            fields: [
              {
                type: "boolean",
                name: "enable",
                label: "Enable Section",
              },
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "object",
                name: "fact_item",
                label: "Fact Items",
                itemProps: (item) => ({
                  label: item.content, // Use the name
                }),
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "icon",
                    label: "Icon",
                  },
                  {
                    type: "string",
                    name: "counter",
                    label: "Counter",
                  },
                  {
                    type: "string",
                    name: "counter_suffix",
                    label: "Counter Suffix",
                  },
                  {
                    type: "string",
                    name: "content",
                    label: "Content",
                  },
                ],
              },
              
            
            ],
            },
          // workinprocess
          {
            type: "object",
            name: "work_process",
            label: "Work Process",
            fields: [
              {
                type: "boolean",
                name: "enable",
                label: "Enable Section",
              },
              {
                type: "string",
                name: "section",
                label: "Section",
              },

            ],
          },

          // Content 

          {
            type: "object",
            name: "image_and_content_block",
            label: "Content Section",
            fields: [
              {
                type: "boolean",
                name: "enable",
                label: "Enable Section",
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle",
              },
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "image",
                label: "Image",
              },
              {
                type: "string",
                name: "content_position",
                label: "Content Position",
              },
              {
                type: "string",
                name: "content",
                label: "Content",
              },

            ],
          },

          // testimonials

          {
            type: "object",
            name: "testimonials",
            label: "Testimonials",
            fields: [
              {
                type: "boolean",
                name: "enable",
                label: "Enable Section",
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle",
              },
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "image",
                label: "Image",
              },
              {
                type: "object",
                name: "reviews",
                label: "Review",
                itemProps: (item) => ({
                  label: item.name, // Use the name
                }),
                list:true,
                fields: [
                  {
                    type: "string",
                    name: "name",
                    label: "Name",
                  },
                  {
                    type: "string",
                    name: "designation",
                    label: "Designation",
                  },
                  {
                    type: "string",
                    name: "rating",
                    label: "Rating",
                  },
                  {
                    type: "string",
                    name: "content",
                    label: "Content",
                  },
                ],
              },
            ],
          },

          // blog 

          {
            type: "object",
            name: "blog",
            label: "Blog",
            fields: [
              {
                type: "boolean",
                name: "enable",
                label: "Enable Section",
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle",
              },
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
              },
              {
                type: "object",
                name: "button",
                label: "Button",
                fields: [
                  {
                    type: "boolean",
                    name: "enable",
                    label: "Enable Button",
                  },
                  {
                    type: "string",
                    name: "link",
                    label: "Button Link",
                  },
                  {
                    type: "string",
                    name: "label",
                    label: "Button Label",
                  },
                  {
                    type: "string",
                    name: "icon",
                    label: "Button Icon",
                  },
                ],
              },
            ],
          },

          // call to action

          {
            type: "object",
            name: "call_to_action",
            label: "Get Quote Button",
            fields: [
              {
                type: "boolean",
                name: "enable",
                label: "Enable Section",
              },
              // Add other fields specific to the call_to_action section
            ],
          },
        ],


      },
    ],
  },
});

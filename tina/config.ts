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
      mediaRoot: "assets/images",
      publicFolder: "",
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
                type: "image",
                name: "images",
                label: "Brand Images",
                list: true
              },
              // Add other brands fields as needed
            ],

          },

          {
            type: "object",
            name: "features",
            label: "features section",
            fields: [
              {
                type: "boolean",
                name: "enable",
                label: "Enable Section",
              },
              {
                type: "string",
                name: "section",
                label: "features",
              },
              // Add other fields specific to the call_to_action section
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
                list: true,
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

      //

      {
        name: "subjects",
        label: "Subjects",
        path: "content/english/subjects",
        ui: {
          allowedActions: {
            create: true,
            delete: true,
          },
        },

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
            name: "description",
            label: "Description",
            description: "Enter the meta description",
          },
          {
            type: "datetime",
            name: "date",
            label: "Publish Date",
          },

          {
            type: "string",
            name: "subject",
            label: "subject ",
            description: "Example: NR 222",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },

      // features page

      {
        "name": "features",
        "label": "Features Page",
        "path": "content/english",
        "ui": {
          "allowedActions": {
            "create": false,
            "delete": false
          }
        },
        "match": {
          "include": "features"
        },
        "fields": [
          {
            "type": "string",
            "name": "title",
            "label": "Title"
          },
          {
            "type": "string",
            "name": "description",
            "label": "Description"
          },
          
          {
            type: "string",
            name: "layout",
            label: "layout",
            description: "It is default value - DO NOT CHANGE",
          },
          {
            "type": "object",
            "name": "features",
            "label": "Features Section",
            "fields": [
              {
                "type": "string",
                "name": "subtitle",
                "label": "Subtitle"
              },
              {
                "type": "string",
                "name": "title",
                "label": "Title"
              },
    
              {
                "type": "object",
                "name": "features_blocks",
                "label": "Features Blocks",
                itemProps: (item) => ({
                  label: item.title, // Use the name
                }),
                list:true,
                "fields": [
                  {
                    "type": "string",
                    "name": "title",
                    "label": "Title"
                  },
                  {
                    "type": "string",
                    "name": "icon",
                    "label": "Icon"
                  },
                  {
                    "type": "string",
                    "name": "content",
                    "label": "Content"
                  }
                ]
              }
            ]
          }
        ]
      },

      // How it works

      {
        name: "how_it_works",
        label: "How It Works",
        path: "content/english",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "how*",
        },
        fields: [

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
            type: "string",
            name: "layout",
            label: "layout",
            description: "It is default value - DO NOT CHANGE",
          },
          {
            type: "object",
            name: "banner",
            label: "Banner",
            fields: [
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
                    name: "label",
                    label: "Button Label",
                  },
                  {
                    type: "string",
                    name: "icon",
                    label: "Button Icon",
                  },
                  {
                    type: "string",
                    name: "link",
                    label: "Button Link",
                  },
                ],
              },
              {
                type: "string",
                name: "image",
                label: "Banner Image",
              },
            ],
          },
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
                name: "subtitle",
                label: "Subtitle",
              },
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "object",
                name: "process_item",
                label: "Process Items",
                itemProps: (item) => ({
                  label: item.title, // Use the name
                }),
                list: true,
                fields: [
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
                    name: "content",
                    label: "Content",
                  },
                ],
              },
            ],
          },
        ],
      },

      // about page 

      {
        name: "about",
        label: "About Page",
        path: "content/english",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "about",
        },
        fields: [

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
            type: "string",
            name: "layout",
            label: "layout",
            description: "It is default value - DO NOT CHANGE",
          },
          {
            type: "object",
            name: "banner",
            label: "Banner",
            fields: [
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
                    name: "label",
                    label: "Button Label",
                  },
                  {
                    type: "string",
                    name: "icon",
                    label: "Button Icon",
                  },
                  {
                    type: "string",
                    name: "link",
                    label: "Button Link",
                  },
                ],
              },
              {
                type: "string",
                name: "image",
                label: "Banner Image",
              },
            ],
          },
          {
            type: "object",
            name: "brands",
            label: "Brands",
            fields: [
              {
                type: "boolean",
                name: "enable",
                label: "Enable Section",
              },
              // Add other fields specific to the brands section
            ],
          },
          {
            type: "object",
            name: "featured_testimonial",
            label: "Featured Testimonial",
            fields: [
              {
                type: "boolean",
                name: "enable",
                label: "Enable Section",
              },
              {
                type: "string",
                name: "author_image",
                label: "Author Image",
              },
              {
                type: "string",
                name: "review",
                label: "Review",
              },
              {
                type: "string",
                name: "author_info",
                label: "Author Information",
              },
            ],
          },
          {
            type: "object",
            name: "about_info",
            label: "About Info",
            fields: [
              {
                type: "boolean",
                name: "enable",
                label: "Enable Section",
              },
              {
                type: "string",
                name: "image",
                label: "image",
              },
              {
                type: "string",
                name: "subtitle",
                label: "subtitle",
              },
              {
                type: "string",
                name: "title",
                label: "title",
              },
              {
                type: "string",
                name: "description",
                label: "Content",
              },
            ],
          },
          {
            type: "object",
            name: "features_box",
            label: "Features Box",
            fields: [
              {
                type: "boolean",
                name: "enable",
                label: "Enable Section",
              },
              {
                type: "object",
                name: "features_box_item",
                label: "Features Box Items",
                itemProps: (item) => ({
                  label: item.title, // Use the name
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
                    name: "title",
                    label: "Title",
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
          {
            type: "object",
            name: "image_and_content_block",
            label: "Image and Content Block",
            fields: [
              {
                type: "boolean",
                name: "enable",
                label: "Enable Section",
              },
              {
                type: "string",
                name: "subtitle",
                label: "subtitle",
              },
              {
                type: "string",
                name: "title",
                label: "title",
              },
              {
                type: "string",
                name: "image",
                label: "image",
              },
              {
                type: "string",
                name: "content_position",
                label: "content_position",
              },
              {
                type: "string",
                name: "content",
                label: "content",
              },
            ],
          },
          {
            type: "object",
            name: "customer_info",
            label: "Customer Info",
            fields: [
              {
                type: "boolean",
                name: "enable",
                label: "Enable Section",
              },
              {
                type: "string",
                name: "subtitle",
                label: "subtitle",
              },
              {
                type: "string",
                name: "title",
                label: "title",
              },
              {
                type: "object",
                name: "block",
                label: "block",
                itemProps: (item) => ({
                  label: item.title, // Use the name
                }),
                list: true,
                fields: [

                  {
                    type: "string",
                    name: "icon",
                    label: "icon",
                  },
                  {
                    type: "string",
                    name: "title",
                    label: "title",
                  },
                  {
                    type: "string",
                    name: "content",
                    label: "content",
                  },
                  // Add other fields specific to the our_peoples section
                ],
              },

            ],
          },
          {
            type: "object",
            name: "our_peoples",
            label: "Our Peoples",

            fields: [
              {
                type: "boolean",
                name: "enable",
                label: "Enable Section",
              },
              {
                type: "string",
                name: "subtitle",
                label: "subtitle",
              },
              {
                type: "string",
                name: "title",
                label: "title",
              },
              {
                type: "object",
                name: "lists",
                label: "lists",
                itemProps: (item) => ({
                  label: item.name, // Use the name
                }),
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "image",
                    label: "image",
                  },
                  {
                    type: "string",
                    name: "name",
                    label: "name",
                  },
                  {
                    type: "string",
                    name: "designation",
                    label: "designation",
                  },
                  // Add other fields specific to the career section
                ],
              },
              // Add other fields specific to the our_peoples section
            ],
          },
          {
            type: "object",
            name: "career",
            label: "Career",
            fields: [
              {
                type: "boolean",
                name: "enable",
                label: "Enable Section",
              },

              {
                type: "string",
                name: "subtitle",
                label: "subtitle",
              },
              {
                type: "string",
                name: "title",
                label: "title",
              },
              {
                type: "string",
                name: "content",
                label: "content",
              },

              // Add other fields specific to the career section
            ],
          },
          {
            type: "object",
            name: "call_to_action",
            label: "Call to Action",
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

      // faq

      {
        name: "faq",
        label: "FAQ Page",
        path: "content/english",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "faqs",
        },
        fields: [
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
            type: "string",
            name: "layout",
            label: "Layout",
          },
          {
            type: "object",
            name: "faq",
            label: "FAQ",
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
                    name: "label",
                    label: "Button Label",
                  },
                  {
                    type: "string",
                    name: "icon",
                    label: "Button Icon",
                  },
                  {
                    type: "string",
                    name: "link",
                    label: "Button Link",
                  },
                ],
              },
              {
                type: "object",
                name: "faq_list",
                label: "FAQ List",
                itemProps: (item) => ({
                  label: item.title, // Use the name
                }),
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "FAQ Title",
                  },
                  {
                    type: "string",
                    name: "content",
                    label: "FAQ Content",
                  },
                ],
              },
            ],
          },
        ],
      },

      // terms 

      {
        name: "terms",
        label: "Terms & Conditions Page",
        path: "content/english",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "tnc",
        },
        fields: [
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
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },

      // money back 

      {
        name: "Money_Back",
        label: "Money Back Page",
        path: "content/english",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "money-back",
        },
        fields: [
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
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },

      // Revision Policy

      {
        name: "Revision_Policy",
        label: "Revision Policy",
        path: "content/english",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "revision-policy",
        },
        fields: [
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
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },

      // Privacy Policy

      {
        name: "Privacy_Policy",
        label: "Privacy Policy",
        path: "content/english",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "privacy-policy",
        },
        fields: [
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
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },

      // Pricing 

      {
        name: "pricing",
        label: "Pricing Page",
        path: "content/english",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "pricing",
        },
        fields: [
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
            type: "string",
            name: "layout",
            label: "Layout",
            description: "It is Default value - DO NOT CHANGE"
          },
          {
            type: "object",
            name: "pricing",
            label: "Pricing",
            fields: [
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
            ],
          },
          {
            type: "object",
            name: "pricing_card",
            label: "Pricing Cards",
            itemProps: (item) => ({
              label: item.name, // Use the name
            }),
            list: true,

            fields: [
              {
                type: "string",
                name: "name",
                label: "Name",
              },
              {
                type: "boolean",
                name: "populer",
                label: "Popular",
              },
              {
                type: "string",
                name: "content",
                label: "Content",
              },
              {
                type: "string",
                name: "currency",
                label: "Currency",
              },
              {
                type: "string",
                name: "price",
                label: "Price",
              },
              {
                type: "string",
                name: "buy_now_btn_label",
                label: "Buy Now Button Label",
              },
              {
                type: "string",
                name: "buy_now_btn_link",
                label: "Buy Now Button Link",
              },

              {
                type: "rich-text",
                name: "features",
                label: "Features",
                isBody: true,
              },
            ],

          },
          {
            type: "object",
            name: "faq",
            label: "FAQ",
            fields: [
              {
                type: "boolean",
                name: "enable",
                label: "Enable",
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
                    label: "Enable",
                  },
                  {
                    type: "string",
                    name: "label",
                    label: "Label",
                  },
                  {
                    type: "string",
                    name: "icon",
                    label: "Icon",
                  },
                  {
                    type: "string",
                    name: "link",
                    label: "Link",
                  },
                ],
              },
              {
                type: "object",
                name: "faq_list",
                label: "FAQ List",
                itemProps: (item) => ({
                  label: item.title, // Use the name
                }),
                list: true,


                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Title",
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
        ],
      },

      // Service page
      {
        name: "services",
        label: "Service Page",
        path: "content/english/services",
        ui: {
          allowedActions: {
            create: true,
            delete: true,
          },
        },

        fields: [
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
            type: "datetime",
            name: "date",
            label: "Publish Date",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      

      // Contact 
      
      {
        name: "contact",
        label: "Contact Page",
        path: "content/english",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "contact",
        },
        fields: [
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
            type: "string",
            name: "layout",
            label: "Layout",
          },
          {
            type: "object",
            name: "contact",
            label: "Contact Section",
            fields: [
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
            ],
          },
          {
            type: "object",
            name: "contact_info",
            label: "Contact Information",
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
                name: "address_list",
                label: "Address List",
                list:true,
                
              },
            ],
          },
          {
            type: "object",
            name: "services",
            label: "Services Section",
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
                name: "service_list",
                label: "Service List",
                list:true,
            
              },
            ],
          },
        ],
      },

      // get quote 

      {
        name: "quote",
        label: "Get Quote Page",
        path: "content/english",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "get-quote",
        },
        fields: [
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
            type: "string",
            name: "layout",
            label: "Layout",
          },
          {
            type: "object",
            name: "contact",
            label: "Contact Section",
            fields: [
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
            ],
          },
          {
            type: "object",
            name: "contact_info",
            label: "Contact Information",
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
                name: "address_list",
                label: "Address List",
                list:true,
                
              },
            ],
          },
          {
            type: "object",
            name: "services",
            label: "Services Section",
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
                name: "service_list",
                label: "Service List",
                list:true,
            
              },
            ],
          },
        ],
      },

      // ... Blog...

      {
        name: "post",
        label: "Blogs",
        path: "content/english/blog",
        ui: {
          allowedActions: {
            create: true,
            delete: true,
          },
        },
        match: {
          exclude: "_index*",
        },
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
            name: "description",
            label: "Description",
            description: "Enter the meta description",
          },
          {
            type: "datetime",
            name: "date",
            label: "Publish Date",
          },
          {
            type: "image",
            name: "images",
            label: "Image",
            list: true,
            description: "Upload or select an image.",
          },
          {
            type: "string",
            name: "tags",
            label: "tags",
            list: true,
          },
          {
            type: "string",
            name: "categories",
            label: "categories",
            list: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },


    ],
  },
});

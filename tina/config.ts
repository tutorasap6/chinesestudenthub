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
            label: "Home Page",
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
              // Add other banner fields as needed
            ],
            
          },
         
        ],
      },
    ],
  },
});

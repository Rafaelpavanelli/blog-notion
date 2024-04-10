"use server"

import { NotionDatabaseResponse } from "@/_types/notion";

const { Client } = require('@notionhq/client');

import { NotionToMarkdown } from 'notion-to-md';

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const DATABASE_ID = 'e4aae5f8f8b14dc5b99977da3cfb79cb';
export async function GetPosts(){
   
      
      const response:NotionDatabaseResponse = await notion.databases.query({
        database_id:  DATABASE_ID
      });
      console.log(response)
      const typedResponse = response as unknown as NotionDatabaseResponse;
      return typedResponse.results.map((post)=>{
        return{
          id: post.id,
          title: post.properties.title.title[0].plain_text,
          slug: post.properties.slug.rich_text[0].plain_text,
          tags: post.properties.tags.multi_select.map((tag)=>tag.name),
          createAt: post.created_time,
          description: post.properties.description.rich_text[0]?.plain_text,
          backgroundImage: post.cover?.external.url
        }
      })
    ;
}
export async function getPost(slug:string){
  const response = await notion.databases.query({
    database_id: DATABASE_ID,
    filter: {
      or: [
        {
          property: 'slug',
          rich_text: {
            equals: slug,
          }
        }
      ],
    },
   
  });

  const pageId = response.results[0].id;
  const n2m = new NotionToMarkdown({notionClient: notion})
  const mdblocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(mdblocks);
  return{
    
    title: response.results[0].properties.title.title[0].plain_text,
    content: mdString.parent
  
  }
}
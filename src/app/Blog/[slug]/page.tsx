import { getPost } from "@/_services/notion"

import ReactMarkdown from 'react-markdown'
export default async function BlogPost({ params }: { params: { slug: string } }){
    const post = await getPost(params.slug)
    return(
        <div>
            <p>{post.title}</p>
            <ReactMarkdown
            
            
            >
                {post.content}
            </ReactMarkdown>
        </div>
    )
}
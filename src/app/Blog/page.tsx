import Card from "@/components/Card";
import { GetPosts } from "../../_services/notion";
import Image from "next/image";

export default async function BlogHome() {
  const posts = await GetPosts();
  return (
    <div className="w-3/4">
      <h1>Blog</h1>
      <div>
        <Image width={300} height={300} src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg" alt="Imagem"/>
      </div>
        {posts.map((post) => (
         <Card title={post.title} image={post.backgroundImage} description={post.description}/>
        ))}
    </div>
  );
}

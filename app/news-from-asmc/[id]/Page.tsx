import Cta2 from "@/components/Cta2";
import ContactUs from "@/components/ContactUs";
// import Blog from '@/components/Blog';
// import { posts } from '@/data/posts';
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return (
    <>
      <Cta2 
        title="News From ASMC" 
        subtitle=""
        details=" Apex Synergy is a global consulting firm specializing in remote workforce integration and business transformation. Our team delivers scalable solutions tailored to your strategic goals." 
        link=""/>
      <div>My Post: {slug}</div>
      <ContactUs/>

    </>
  )
}


// // Generate static paths for all posts
// export async function getStaticPaths() {
//   // Get all slugs from local data
//   const paths = posts.map(post => ({
//     params: { id: post.id }
//   }));

//   return {
//     paths,
//     fallback: false // Show 404 for non-existent slugs
//   };
// }

// // Fetch data for each post
// export async function getStaticProps({ params }: { params: Promise<{ id: number }> }) {
//   // Find the post with matching slug
//   const post = posts.find(post => post.id === params.id);

//   return {
//     props: {
//       post
//     }
//   };
// }
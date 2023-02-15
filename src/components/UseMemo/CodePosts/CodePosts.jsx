import React, {useState, useMemo} from 'react'




const CodePosts = ({posts}) => {
const [reRender, setReRender] = useState(false)

    /* const orderedPostsWithTitle = posts
    .map((post) => ({
      ...post,
      date: new Date(post.date),
      title: post.slug.split("-").join(" ").toUpperCase()
    }))
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .map((post) => ({
      ...post,
      date: new Intl.DateTimeFormat("es-ES").format(post.date)
    })); */

    const orderedPostsWithMemo = useMemo(() => {
        console.log("Generating posts...");
        return posts
          .map((post) => ({
            ...post,
            date: new Date(post.date),
            
            title: post.slug.split("-").join(" ").toUpperCase()
          }))
          .sort((a, b) => a.date.getTime() - b.date.getTime())
          .map((post) => ({
            ...post,
            date: new Intl.DateTimeFormat("es-ES").format(post.date)
          }));
      }, [posts]);

   console.log('Se renderiza el componente')


    return (
        <div>
          <h1>Post destacados 😍</h1>
    
          <ul>
            {orderedPostsWithMemo.map((post) => (
              <li key={post.slug}>
                <h3>{post.title}</h3> {post.date}
                <hr />
              </li>
            ))}
          </ul>
          <button onClick={() => setReRender(!reRender)}>Rerender</button>
        </div>
      );
}

export default CodePosts
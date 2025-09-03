import React from 'react'

type PageProps = {
  // params:{slug:string},
  params:Promise<{slug:string}>
  searchParams :{[key:string]:string | string[] | undefined}
}
const SingleBlogPage = async ({params,searchParams}:PageProps) => {
    console.log(params)
    const {slug} = await params;
    console.log(slug)


    const resolvedsearchParams = await searchParams;
    console.log(resolvedsearchParams)

    console.log(Object.entries(searchParams))
  return (
    <div>
      Single Blog Page : {slug}
      {/* search params  : {searchParams} */}
      {/* http://localhost:3000/blog/Tailwind-CSS-course?search=hello&aa=nnn */}
      <ul>
       {
       Object.entries(searchParams).map(([key,value])=>(
        <li key={key}>
         {key}:{Array.isArray(value)?value.join(','):value}
        </li>
       ))

       }
      </ul>
    </div>
  )
}

export default SingleBlogPage

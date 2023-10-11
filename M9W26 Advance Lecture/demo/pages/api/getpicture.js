// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  // get 
  if(req.method === "GET") {
    res.status(200).json({ name: 'John Doe', username: "Alvin", num: 90 })
  }

  // POST
  if(req.method === "POST") {
    console.log('data created');
    res.status(203).json({data: true})
  }

  // PUT
  if(req.method === "PUT") {
    console.log('data was updated');
    res.status(203).json({data: true})
  } 

  if(req.method === "DELETE") {
    console.log('data was deleted');
    res.status(203).json({data: true})
  } 
  
}


//  app.get('/api/getpictures')
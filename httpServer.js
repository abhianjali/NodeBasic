import * as http from 'http';
import * as fs from 'fs';
import path from 'path';
// import { promises as fs } from 'fs';

const port=process.env.PORT || 8080;
const server=http.createServer(
    (req,res)=>{        
        res.statusCode=200;
        res.setHeader('Content-type','text/html');
        
        if(req.url == "/")
        {
            res.statusCode=200;
            res.end('<h1>Hi Abhishek</h1>')
        }
        if(req.url == "/home")
        {
            try {
                // const filePath = path.join(process.cwd(), 'public', 'index.html');
                // const html = fs.readFileSync(filePath, 'utf8');   
                const filePath = path.join(process.cwd(), 'imp', 'index.html');
                const html =  fs.readFileSync(filePath, 'utf8');
                res.statusCode=200;
                res.end(html.toString());
            } catch (err) {
                console.error("File Read Error:", err.message);
               // res.status(500).json({ error: "Failed to load index.html", details: err.code });
                res.end(err.message);
            }
           
            //tst
        }
        else if(req.url =="/about")
        {
            //abhi();
            res.statusCode=200;
            res.end('<h1>About Abhiaa</h1>')
        }
        else
        {
            res.statusCode=404;
            res.end('<h1>Crashed</h1>')
        }
       
    }
)

server.listen(port,()=>{
    console.log(`Server is listing on port ${port}`);}
)
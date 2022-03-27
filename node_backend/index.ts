"use strict";
import express, { Application, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
const app: Application = express()
const port = 4000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use((req: Request, res: Response, next: NextFunction) => {
     res.header('Access-Control-Allow-Origin', '*');
     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
     next();
});

app.post('/area', (req: Request, res: Response) => {
     let area: number = req.body.base * req.body.height / 2
     if (req.body.base < 0 || req.body.height < 0) {
          let area: string = "Invalid Input"
          res.send({ area })
     }
     else
          //res.sendStatus(400)
          res.send({ area })
})

app.post('/citizenId', (req: Request, res: Response) => {
     var id: string = String(req.body.citizenId)
     const pattern = /^[0-9]+$/;
     var success, error_code, error_msg
     if (pattern.test(id)) {
          if (id.length != 13) {
               success = false
               error_code = "001"
               error_msg = "cititzen_id invalid"
          }
          else {
               var lastDigit: Number = Number.parseInt(id.charAt(id.length - 1))
               var sum: number = 0
               for (var i = 0; i < id.length - 1; i++)
                    sum += Number.parseInt(id.charAt(i)) * (13 - i)
               var checkDigit = 11 - sum % 11
               checkDigit = checkDigit % 10
               if (checkDigit == lastDigit) {
                    success = true
                    error_code = "200"
                    error_msg = ""
               }
               else {
                    success = false
                    error_code = "001"
                    error_msg = "cititzen_id invalid"
               }
          }
     }
     else {
          if (id.length == 0) {
               success = false
               error_code = "001"
               error_msg = "cititzen_id require"
          }
          else {
               success = false
               error_code = "001"
               error_msg = "cititzen_id invalid"
          }
     }
     res.send({ success, error_code, error_msg })
})

app.listen(port, function () {
     console.log(`Connecting on Port ${port}`)
})

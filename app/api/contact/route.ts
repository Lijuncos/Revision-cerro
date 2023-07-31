import { NextResponse, NextRequest } from "next/server";

export async function POST(req: Request, response: Response) {
    const body = await req.json();

    const contentHtml = `
    <!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>NUEVO PEDIDO</title>
        <style>
            body {
                margin: 0;
                padding: 0;
                font-family: Arial, sans-serif;
                line-height: 1.5;
            }

            .header {
                text-align: left;
                padding-bottom: 20px;
            }
    
            .header h1 {
                margin: 0;
                font-size: 24px;
                font-weight: 900;
            }
    
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
            }
    
            .content {
                padding: 20px 0;
                border-top: 1px solid #ccc;
                border-bottom: 1px solid #ccc;
            }
    
            .personal-info {
                margin-bottom: 15px;
                color: #555;
            }
    
            .personal-info li {
                margin-bottom: 5px;
                color: #555;
                font-weight: 500;
                font-size: 16px;
            }
            
            .link {
                color: #007bff;
                text-decoration: none;
            }

            .footer {
                margin-bottom: 15px;
                text-align: left;
                padding-top: 20px;
            }

            .footer p {
                list-style: none;
                margin-bottom: 5px;
                color: #777;
                text-align:left;
                font-size: 16px;
            }

        </style>
    </head>
    
    <body>
        <div class="container">
            <div class="header">
                <h1>CERRO GROUP</h1>
            </div>
            <div class="content">
                <div class="personal-info">
                    <h2>Datos personales:</h2>
                    <ul>
                        <li><strong>Nombre: </strong>${body.formValues.name} ${body.formValues.lastname} </li>
                        <li><strong>Email: </strong><a href="mailto:${body.formValues.mail}" class="link">${body.formValues.mail}</a></li>
                        <li><strong>Teléfono: </strong>${body.formValues.phone}</li>
                        <li><strong>Temas: </strong>${Object.keys(body.radioValues).filter((key) =>
                            body.radioValues[key] !== '').map((item, index, array) => {
                                return `${body.radioValues[item]}${index < array.length - 1 ? ', ' : ''}`;
                                    }).join("")}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="footer">
                ${body.formValues.consultation? 
                    `<p><strong>Mensaje: </strong>${body.formValues.consultation}</p>` : ""}
            </div>
        </div>
    </body>
    </html>
    `

    const nodemailer = require("nodemailer");
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465, // 465,
        secure: true, // true
        //     tls: {
        //         ciphers: 'SSLv3'
        //     },
        auth: {
            user: "tomas.dibacco@25watts.com.ar",
            pass: `${process.env.NEXT_PUBLIC_NODEMAILER_PASS}`
        }
    });

    const mailOptions = {
        from: "NODEMAILER",
        to: "tomas.dibacco@25watts.com.ar",
        subject: "Practicando con nodemailer!",
        html: contentHtml,
        // text: ""
    };

    transporter.sendMail(mailOptions, (error: any, info: any) => {
        if (error) {
            console.log(error);
            return NextResponse.json({ message: "ERROR" }, { status: 500 })
        } else {
            console.log('Email sent: ' + info.response);
        }
    })
    return NextResponse.json({ message: "OKEY" }, { status: 200 })
}
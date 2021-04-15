# Documentacion para el consumo de la API

## Descripción 
Esta API se conecta a Openpay y su tarea es insertar nuevos clientes y mostrar la lista de todos los clientes

## Crear usuario
    URL: /api/user
    HTTP METHOD: [POST]
    REQUEST:
        {
                "name":"Alberto",
                "email":"inf.albsosa@example.com",
                "last_name":"Sosa",
                "city":"Queretaro",
                "state":"Queretaro",
                "address":"Tetitlán",
                "postal_code":"76000",
                "country_code":"MX",
                "phone_number":"01742424"        
        }

    DATA TYPE:
        {
                "name":"STRING",
                "email":"STRING",
                "last_name":"STRING",
                "city":"STRING",
                "state":"STRING",
                "address":"STRING",
                "postal_code":"INT",
                "country_code":"STRING",
                "phone_number":"STRING"        
        } 
        
     RESPONSE:
        200 [OK]
        {
                "id": "atk4whwipywr2xc2akct",
                "name": "Alberto",
                "last_name": "Sosa",
                "email": "inf.albsosa@example.com",
                "phone_number": "01742424",
                "address": {
                        "line1": "Tetitlán",
                        "line2": "",
                        "line3": null,
                        "state": "Queretaro",
                        "city": "Queretaro",
                        "postal_code": "76000",
                        "country_code": "MX"
                },
                "creation_date": "2021-04-14T19:24:52-05:00",
                "external_id": null,
                "clabe": null
        }
     ERROR:
        400 [ERROR]
        {
        "error": {
                "http_code": 400,
                "error_code": 1001,
                "category": "request",
                "description": "name no puede estar vacío",
                "request_id": "f10660af-d740-4fbe-bf38-352e8850170e"
        },
        "body": null
        }
            
        }

## Mostrar usuarios
        URL: admin/bloques
        HTTP METHOD: [GET]
        REQUEST: {}
        RESPONSE:
        200 [OK]
        [
                {
                        "id": "a6fvkq8qkcwdz7hnnlyk",
                        "name": "Humberto Francisco",
                        "last_name": "Salaiz",
                        "email": "inf.albsosa@gmail.com",
                        "phone_number": null,
                        "address": {
                        "line1": "55b",
                        "line2": "",
                        "line3": null,
                        "state": "Coahuila de Zaragoza",
                        "city": "Torre�n",
                        "postal_code": "27000",
                        "country_code": "MX"
                        },
                        "creation_date": "2021-04-14T19:29:01-05:00",
                        "external_id": null,
                        "clabe": null
                },
                {
                        "id": "atk4whwipywr2xc2akct",
                        "name": "Alberto",
                        "last_name": "Sosa",
                        "email": "inf.albsosa@example.com",
                        "phone_number": "01742424",
                        "address": {
                        "line1": "Tetitlán",
                        "line2": "",
                        "line3": null,
                        "state": "Queretaro",
                        "city": "Queretaro",
                        "postal_code": "76000",
                        "country_code": "MX"
                        },
                        "creation_date": "2021-04-14T19:24:53-05:00",
                        "external_id": null,
                        "clabe": null
                },
                {
                        "id": "ay1kr7mzq4e7p8bkm9px",
                        "name": "Genesis",
                        "last_name": "Dominguez",
                        "email": "genesis@fdvdf.com",
                        "phone_number": null,
                        "address": {
                        "line1": "55b",
                        "line2": "",
                        "line3": null,
                        "state": "Yucatán",
                        "city": "Mérida",
                        "postal_code": "38000",
                        "country_code": "MX"
                        },
                        "creation_date": "2021-04-14T15:05:28-05:00",
                        "external_id": null,
                        "clabe": null
                },
                {
                        "id": "afeawguj7kzk2fpxyxsu",
                        "name": "Humberto Francisco",
                        "last_name": "Salaiz",
                        "email": "inf.albsosa@gmail.com",
                        "phone_number": null,
                        "address": {
                        "line1": "55b",
                        "line2": "",
                        "line3": null,
                        "state": "Coahuila de Zaragoza",
                        "city": "Torre�n",
                        "postal_code": "27000",
                        "country_code": "MX"
                        },
                        "creation_date": "2021-04-14T14:56:58-05:00",
                        "external_id": null,
                        "clabe": null
                },
                {
                        "id": "anpznj3sysfqtgjb2crm",
                        "name": "Alberto",
                        "last_name": "Sosa",
                        "email": "inf.albsosa@example.com",
                        "phone_number": null,
                        "address": {
                        "line1": "Tetitlán",
                        "line2": "",
                        "line3": null,
                        "state": "Queretaro",
                        "city": "Queretaro",
                        "postal_code": "76000",
                        "country_code": "MX"
                        },
                        "creation_date": "2021-04-13T23:31:13-05:00",
                        "external_id": null,
                        "clabe": null
                },
                {
                        "id": "a4nk5o4q1mcvb8wak0vv",
                        "name": "John",
                        "last_name": "Doe",
                        "email": "johndoe@example.com",
                        "phone_number": "44209087654",
                        "address": {
                        "line1": "Calle Morelos no 10",
                        "line2": "col. san pablo",
                        "line3": null,
                        "state": "Queretaro",
                        "city": "Queretaro",
                        "postal_code": "76000",
                        "country_code": "MX"
                        },
                        "creation_date": "2021-04-13T23:17:30-05:00",
                        "external_id": null,
                        "clabe": null
                }
        ]
### Obtener Acceso
    URL: /api/login
    HTTP METHOD: [POST]
    REQUEST:
        {
        "user": "asosaf69",
        "password": "12345"
    }

    DATA TYPE:
        {
            "username":         [STRING],
            "password":         [STRING]
        }

    RESPONSE:
        200 [OK]
        {
                "token_type": "Bearer",
                "expires_in": 12000,
                "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY0NTg0MGExYmNlOWZmMGZlOWYyOTU3MTQ5NGZhMWI1MmUwMzNkOTdlNDMwMTgwN2M1NDhmMWY2ZTdjOGZiZWI1ZDI0YTE3NTdlZGQzMjBlIn0.eyJhdWQiOiI0IiwianRpIjoiNjQ1ODQwYTFiY2U5ZmYwZmU5ZjI5NTcxNDk0ZmExYjUyZTAzM2Q5N2U0MzAxODA3YzU0OGYxZjZlN2M4ZmJlYjVkMjRhMTc1N2VkZDMyMGUiLCJpYXQiOjE1MzI3MzAwNjksIm5iZiI6MTUzMjczMDA2OSwiZXhwIjoxNTMyNzQyMDY5LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.ppY4uW7dfJUsKlpSw-E5agHPrpbErM_fzaZTYdBeyYjwnwKzR9QcVyPtzuW6uqa24f8qzEKpZsSoEOw7R4D5cmRmZ-FtuwvAhGY6Nd8eqeJKWMrtbOmOFmUQvcPiNHpBv9kHoKeQRw3q8aqGmKjZxHRvKZYoQZ6QMwUqXQr_ykjYBaaDhItMwZDFdLQu7_f8gr2S98Mtn4OihS30LCqa7MRzYKlj5JTPKZhheI1C1xXcLQwbS7l81Y7h3pMwJVYzc1WFk_yxzZ2QStDuJ5fgU_OjtybCZzMIZBptjf4f86cGX2yI6xH1W5egOQ0s4IT2t4HEvz71xrMBp5-1QIcjd8LbAB0rpTJINvPFDh-1saKinrk_SzYgN39OhNzclixpffJCtzaBL_ZAR-4GmFLAzo0rCFJxUsjeHGIxKy26JECTQpoFUYjJj1uX5om4DGTup-YFXLKPksD1dO6t_vaTG7Q6HmbIfvTW27u2PMH5OgFlkTIDRo3ss2NeJXYl7tZ0fkn0wW4xfQGDPLAeIgSTeIKWbCsXW4Wqs4HjLYLrTxFbLQSFxMc8xFem10TZN4EGdqyT2Y58bVF5Z88A1MFcVMjQzS_CvBiQ_ryrk_gCi0D67GpT3gmNLbzSOQkFwiNmLfFi2JgvdMzEuzvEF8ZPb08mykLwFapOoc2_MNavJuY",
                "refresh_token": "def50200830dd2ce8f195b08cec7b9b816b1127edfdafdfc039156425221aa9fc55bf09b463746013ef1e3c08395027ccb4020d46535b5007056020d198238a9048493e1424ed7dcc1f496db73c2725f0b9f0e3ada91c6bd7de7656f06b280fa9b62b54f90b94f9679b5c3aa738b17a9b0f9e02bcd03c30fc145f61b8aa22e5ad86fa64f26557e718ee50d79a9bbb03a26e390669e7e26afbc467ad77f9ec5fb44795e4e050b05676747afd94d612a72ef430d53851853a8956c909d3304b9c91085324b573ea83fdb196d82e196b8fe76abbd990a6ca3796678db76b80704681628335bb5db3c76e12491501c93872ba8440dc3f9f9d0e908cd479034c470d70cff381bafbe125d186bf3165e849c47c7ccbeed310ca082e6dab901800533482c30e03ecf6e1c77189bdd6cd7d63090182f3e7139813e42277909b856367df9d6da16480084d36e795dd0746ab60e18450326b3fa7b777ea23cd739b17f74",
                "user": {
                        "nombre": "Prof. Marvin Hayes I",
                        "email": "inf.albsosa@gmail.com",
                        "escuela_id": 3,
                        "admin": "true"
                }
        }
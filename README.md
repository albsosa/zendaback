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
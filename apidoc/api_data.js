define({ "api": [
  {
    "type": "post",
    "url": "/species",
    "title": "Adiciona uma espécie",
    "name": "Add_Species",
    "group": "Species",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome da espécie.</p>"
          }
        ]
      }
    },
    "filename": "api/controllers/Controller.js",
    "groupTitle": "Species"
  },
  {
    "type": "get",
    "url": "/species",
    "title": "Lista todas espécies",
    "name": "Get_Species",
    "group": "Species",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Array de espécies.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.idSpecie",
            "description": "<p>id da espécie.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>Nome da espécie.</p>"
          }
        ]
      }
    },
    "filename": "api/controllers/Controller.js",
    "groupTitle": "Species"
  },
  {
    "type": "delete",
    "url": "/species",
    "title": "Remove uma espécie",
    "name": "Remove_Species",
    "group": "Species",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id da espécie.</p>"
          }
        ]
      }
    },
    "filename": "api/controllers/Controller.js",
    "groupTitle": "Species"
  }
] });

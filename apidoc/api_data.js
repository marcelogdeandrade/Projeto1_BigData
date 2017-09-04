define({ "api": [
  {
    "type": "post",
    "url": "/pets",
    "title": "Adiciona um remédio",
    "name": "Add_Medicine",
    "group": "Medicines",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do remédio.</p>"
          }
        ]
      }
    },
    "filename": "api/controllers/Medicines/ControllerMedicines.js",
    "groupTitle": "Medicines"
  },
  {
    "type": "get",
    "url": "/medicines",
    "title": "Lista todos remédios",
    "name": "Get_medicines",
    "group": "Medicines",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Array de remédios.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.idMedicine",
            "description": "<p>id do remédio.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>Nome do remédio.</p>"
          }
        ]
      }
    },
    "filename": "api/controllers/Medicines/ControllerMedicines.js",
    "groupTitle": "Medicines"
  },
  {
    "type": "delete",
    "url": "/pet",
    "title": "Remove um remédio",
    "name": "Remove_Medice",
    "group": "Medicines",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id do remédio.</p>"
          }
        ]
      }
    },
    "filename": "api/controllers/Medicines/ControllerMedicines.js",
    "groupTitle": "Medicines"
  },
  {
    "type": "post",
    "url": "/pets",
    "title": "Adiciona um pet",
    "name": "Add_Pet",
    "group": "Pets",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do pet.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>Nome do pet.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data.birthDate",
            "description": "<p>Aniversario do pet.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data.idSpecies",
            "description": "<p>id da Espécie do pet.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data.idClient",
            "description": "<p>id do Dono do pet.</p>"
          }
        ]
      }
    },
    "filename": "api/controllers/Pets/ControllerPets.js",
    "groupTitle": "Pets"
  },
  {
    "type": "get",
    "url": "/pets",
    "title": "Lista todas espécies",
    "name": "Get_Pets",
    "group": "Pets",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Array de pets.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.idPet",
            "description": "<p>id do pet.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>Nome do pet.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.birthDate",
            "description": "<p>Aniversario do pet.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.idSpecies",
            "description": "<p>id da Espécie do pet.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.idClient",
            "description": "<p>id do Dono do pet.</p>"
          }
        ]
      }
    },
    "filename": "api/controllers/Pets/ControllerPets.js",
    "groupTitle": "Pets"
  },
  {
    "type": "delete",
    "url": "/pet",
    "title": "Remove um pet",
    "name": "Remove_Pets",
    "group": "Pets",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id do Pet.</p>"
          }
        ]
      }
    },
    "filename": "api/controllers/Pets/ControllerPets.js",
    "groupTitle": "Pets"
  },
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
    "filename": "api/controllers/Species/ControllerSpecies.js",
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
            "field": "data.idSpecies",
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
    "filename": "api/controllers/Species/ControllerSpecies.js",
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
    "filename": "api/controllers/Species/ControllerSpecies.js",
    "groupTitle": "Species"
  }
] });

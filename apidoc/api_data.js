define({ "api": [
  {
    "type": "post",
    "url": "/illnesses",
    "title": "Adiciona uma doença",
    "name": "Add_Illness",
    "group": "Illnesses",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome da doença.</p>"
          },
          {
            "group": "Parameter",
            "type": "Bool",
            "optional": false,
            "field": "contagious",
            "description": "<p>indica se a doença é contagiosa.</p>"
          }
        ]
      }
    },
    "filename": "api/controllers/Illnesses/ControllerIllnesses.js",
    "groupTitle": "Illnesses"
  },
  {
    "type": "get",
    "url": "/illnesses",
    "title": "Lista todas doenças",
    "name": "Get_illnesses",
    "group": "Illnesses",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Array de doenças.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.idIllness",
            "description": "<p>id da doença.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>Nome da doença.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Bool",
            "optional": false,
            "field": "contagious",
            "description": "<p>indica se a doença é contagiosa.</p>"
          }
        ]
      }
    },
    "filename": "api/controllers/Illnesses/ControllerIllnesses.js",
    "groupTitle": "Illnesses"
  },
  {
    "type": "delete",
    "url": "/illnesses",
    "title": "Remove uma doença",
    "name": "Remove_Illness",
    "group": "Illnesses",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id da doença.</p>"
          }
        ]
      }
    },
    "filename": "api/controllers/Illnesses/ControllerIllnesses.js",
    "groupTitle": "Illnesses"
  },
  {
    "type": "put",
    "url": "/illnesses",
    "title": "Atualiza uma doença",
    "name": "Update_Illness",
    "group": "Illnesses",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id da doença.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>Valor a ser atualizado.</p>"
          }
        ]
      }
    },
    "filename": "api/controllers/Illnesses/ControllerIllnesses.js",
    "groupTitle": "Illnesses"
  },
  {
    "type": "post",
    "url": "/medicines",
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
    "url": "/medicines",
    "title": "Remove um remédio",
    "name": "Remove_Medicine",
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
    "type": "put",
    "url": "/medicines",
    "title": "Atualiza um remédio",
    "name": "Update_Medicine",
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>Valor a ser atualizado.</p>"
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
    "type": "put",
    "url": "/pet",
    "title": "Atualiza um pet",
    "name": "Update_Pets",
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "column",
            "description": "<p>Campo a ser atualizado.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>Valor a ser atualizado.</p>"
          }
        ]
      }
    },
    "filename": "api/controllers/Pets/ControllerPets.js",
    "groupTitle": "Pets"
  },
  {
    "type": "post",
    "url": "/relillnessespets",
    "title": "Adiciona uma relacao Doença/Pet",
    "name": "Add_RelIllnessesPets",
    "group": "RelIllnessesPets",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Array de relacoes Doenças/Pets.</p>"
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
            "field": "data.idIllness",
            "description": "<p>id da doença.</p>"
          }
        ]
      }
    },
    "filename": "api/controllers/RelIllnessesPets/ControllerRelIllnessPets.js",
    "groupTitle": "RelIllnessesPets"
  },
  {
    "type": "get",
    "url": "/relillnessespets",
    "title": "Lista todas as relacoes Doenças/Pets",
    "name": "Get_RelIllnessesPets",
    "group": "RelIllnessesPets",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Array de relacoes Doenças/Pets.</p>"
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
            "field": "data.idIllness",
            "description": "<p>id da doença.</p>"
          }
        ]
      }
    },
    "filename": "api/controllers/RelIllnessesPets/ControllerRelIllnessPets.js",
    "groupTitle": "RelIllnessesPets"
  },
  {
    "type": "delete",
    "url": "/relillnessespets",
    "title": "Remove uma relacao Doença/Pet",
    "name": "Remove_Relation",
    "group": "RelIllnessesPets",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idPet",
            "description": "<p>Id do Pet.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idIllness",
            "description": "<p>Id da doença.</p>"
          }
        ]
      }
    },
    "filename": "api/controllers/RelIllnessesPets/ControllerRelIllnessPets.js",
    "groupTitle": "RelIllnessesPets"
  },
  {
    "type": "put",
    "url": "/relillnessespets",
    "title": "Atualiza uma relacao Pet/Doenca",
    "name": "Update_RelIllnessesPets",
    "group": "RelIllnessesPets",
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "column",
            "description": "<p>Campo a ser atualizado.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>Valor a ser atualizado.</p>"
          }
        ]
      }
    },
    "filename": "api/controllers/RelIllnessesPets/ControllerRelIllnessPets.js",
    "groupTitle": "RelIllnessesPets"
  },
  {
    "type": "post",
    "url": "/relpetsmedicines",
    "title": "Adiciona uma relacao Pet/Remedio",
    "name": "Add_RelMecidinesPets",
    "group": "RelMecidinesPets",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Array de relacoes Pets/Remedios.</p>"
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
            "field": "data.idMedicine",
            "description": "<p>id do remédio.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.quantity",
            "description": "<p>quantidade da dose do remedio.</p>"
          }
        ]
      }
    },
    "filename": "api/controllers/RelMedicinesPets/ControllerRelMedicinesPets.js",
    "groupTitle": "RelMecidinesPets"
  },
  {
    "type": "get",
    "url": "/relpetsmedicines",
    "title": "Lista todas as relacoes Pets/Remedios",
    "name": "Get_RelMecidinesPets",
    "group": "RelMecidinesPets",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Array de relacoes Pets/Remedios.</p>"
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
            "field": "data.idMedicine",
            "description": "<p>id do remédio.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.quantity",
            "description": "<p>quantidade da dose do remedio.</p>"
          }
        ]
      }
    },
    "filename": "api/controllers/RelMedicinesPets/ControllerRelMedicinesPets.js",
    "groupTitle": "RelMecidinesPets"
  },
  {
    "type": "delete",
    "url": "/relpetsmedicines",
    "title": "Remove uma relacao pet/remedio",
    "name": "Remove_Relation",
    "group": "RelMecidinesPets",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idPet",
            "description": "<p>Id do Pet.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idMedicine",
            "description": "<p>Id do remedio.</p>"
          }
        ]
      }
    },
    "filename": "api/controllers/RelMedicinesPets/ControllerRelMedicinesPets.js",
    "groupTitle": "RelMecidinesPets"
  },
  {
    "type": "put",
    "url": "/relpetsmedicines",
    "title": "Atualiza uma relacao Pet/Remedio",
    "name": "Update_RelMecidinesPets",
    "group": "RelMecidinesPets",
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "column",
            "description": "<p>Campo a ser atualizado.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>Valor a ser atualizado.</p>"
          }
        ]
      }
    },
    "filename": "api/controllers/RelMedicinesPets/ControllerRelMedicinesPets.js",
    "groupTitle": "RelMecidinesPets"
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
  },
  {
    "type": "update",
    "url": "/Species",
    "title": "Atualiza uma especie",
    "name": "Update_Species",
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
            "description": "<p>Id da especie.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>Valor a ser atualizado.</p>"
          }
        ]
      }
    },
    "filename": "api/controllers/Species/ControllerSpecies.js",
    "groupTitle": "Species"
  }
] });

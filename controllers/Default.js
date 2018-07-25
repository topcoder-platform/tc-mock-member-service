'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.leaderboardsGET = function leaderboardsGET (req, res, next) {
  var filter = req.swagger.params['filter'].value;
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  Default.leaderboardsGET(filter,offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.membersHandleExternalAccountsGET = function membersHandleExternalAccountsGET (req, res, next) {
  var handle = req.swagger.params['handle'].value;
  var fields = req.swagger.params['fields'].value;
  Default.membersHandleExternalAccountsGET(handle,fields)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.membersHandleExternalLinksGET = function membersHandleExternalLinksGET (req, res, next) {
  var handle = req.swagger.params['handle'].value;
  var fields = req.swagger.params['fields'].value;
  Default.membersHandleExternalLinksGET(handle,fields)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.membersHandleExternalLinksKeyDELETE = function membersHandleExternalLinksKeyDELETE (req, res, next) {
  var handle = req.swagger.params['handle'].value;
  var key = req.swagger.params['key'].value;
  Default.membersHandleExternalLinksKeyDELETE(handle,key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.membersHandleExternalLinksPOST = function membersHandleExternalLinksPOST (req, res, next) {
  var handle = req.swagger.params['handle'].value;
  var body = req.swagger.params['body'].value;
  Default.membersHandleExternalLinksPOST(handle,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.membersHandleFinancialGET = function membersHandleFinancialGET (req, res, next) {
  var handle = req.swagger.params['handle'].value;
  var fields = req.swagger.params['fields'].value;
  Default.membersHandleFinancialGET(handle,fields)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.membersHandleGET = function membersHandleGET (req, res, next) {
  var handle = req.swagger.params['handle'].value;
  var fields = req.swagger.params['fields'].value;
  Default.membersHandleGET(handle,fields)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.membersHandlePUT = function membersHandlePUT (req, res, next) {
  var handle = req.swagger.params['handle'].value;
  var body = req.swagger.params['body'].value;
  Default.membersHandlePUT(handle,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.membersHandlePhotoPUT = function membersHandlePhotoPUT (req, res, next) {
  var handle = req.swagger.params['handle'].value;
  var body = req.swagger.params['body'].value;
  Default.membersHandlePhotoPUT(handle,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.membersHandlePhotoUploadUrlPOST = function membersHandlePhotoUploadUrlPOST (req, res, next) {
  var handle = req.swagger.params['handle'].value;
  var body = req.swagger.params['body'].value;
  Default.membersHandlePhotoUploadUrlPOST(handle,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.membersHandleSkillsGET = function membersHandleSkillsGET (req, res, next) {
  var handle = req.swagger.params['handle'].value;
  var fields = req.swagger.params['fields'].value;
  Default.membersHandleSkillsGET(handle,fields)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.membersHandleSkillsPATCH = function membersHandleSkillsPATCH (req, res, next) {
  var handle = req.swagger.params['handle'].value;
  var body = req.swagger.params['body'].value;
  Default.membersHandleSkillsPATCH(handle,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.membersHandleStatsGET = function membersHandleStatsGET (req, res, next) {
  var handle = req.swagger.params['handle'].value;
  var fields = req.swagger.params['fields'].value;
  Default.membersHandleStatsGET(handle,fields)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.membersHandleStatsHistoryGET = function membersHandleStatsHistoryGET (req, res, next) {
  var handle = req.swagger.params['handle'].value;
  var fields = req.swagger.params['fields'].value;
  Default.membersHandleStatsHistoryGET(handle,fields)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.membersHandleTraitsDELETE = function membersHandleTraitsDELETE (req, res, next) {
  var handle = req.swagger.params['handle'].value;
  var traitIds = req.swagger.params['traitIds'].value;
  Default.membersHandleTraitsDELETE(handle,traitIds)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.membersHandleTraitsGET = function membersHandleTraitsGET (req, res, next) {
  var handle = req.swagger.params['handle'].value;
  var traitIds = req.swagger.params['traitIds'].value;
  var fields = req.swagger.params['fields'].value;
  Default.membersHandleTraitsGET(handle,traitIds,fields)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.membersHandleTraitsPOST = function membersHandleTraitsPOST (req, res, next) {
  var handle = req.swagger.params['handle'].value;
  var body = req.swagger.params['body'].value;
  Default.membersHandleTraitsPOST(handle,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.membersHandleTraitsPUT = function membersHandleTraitsPUT (req, res, next) {
  var handle = req.swagger.params['handle'].value;
  var body = req.swagger.params['body'].value;
  Default.membersHandleTraitsPUT(handle,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.membersHandleVerifyPOST = function membersHandleVerifyPOST (req, res, next) {
  var handle = req.swagger.params['handle'].value;
  var oldEmail = req.swagger.params['oldEmail'].value;
  var newEmail = req.swagger.params['newEmail'].value;
  var token = req.swagger.params['token'].value;
  Default.membersHandleVerifyPOST(handle,oldEmail,newEmail,token)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.membersStatsDistributionGET = function membersStatsDistributionGET (req, res, next) {
  var filter = req.swagger.params['filter'].value;
  var fields = req.swagger.params['fields'].value;
  Default.membersStatsDistributionGET(filter,fields)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.members_searchGET = function members_searchGET (req, res, next) {
  var filter = req.swagger.params['filter'].value;
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  Default.members_searchGET(filter,offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.members_suggestTermGET = function members_suggestTermGET (req, res, next) {
  var term = req.swagger.params['term'].value;
  Default.members_suggestTermGET(term)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

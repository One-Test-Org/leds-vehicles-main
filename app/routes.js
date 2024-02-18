const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/after-search', function (req, res) {
  var whatVRM = req.session.data['VRM']
  if (whatVRM == "CF60 DPK"){
    res.redirect('/overview-s')
  } else if (whatVRM == "CF60 ABC"){
    res.redirect('/search-results')
  } else if (whatVRM == "BIII LLY"){
    res.redirect('/search-results-ct')
  } else if (whatVRM == "CF60 POP"){
    res.redirect('/overview')
  }
  else {
    res.redirect('/VRM-help')
  }
})


router.post('/demo-report', function (req, res) {
  var whatReport = req.session.data['report-type']
  if (whatReport == "action"){
    res.redirect('/wip/add-reports/demo-add-reports/add-action')
  } else if (whatReport == "correction"){
    res.redirect('/wip/add-reports/demo-add-reports/add-rest')
  } else if (whatReport == "destroyed"){
    res.redirect('/wip/add-reports/demo-add-reports/add-rest')
  } else if (whatReport == "found"){
    res.redirect('/wip/add-reports/demo-add-reports/add-found')
  } else if (whatReport == "information"){
    res.redirect('/wip/add-reports/demo-add-reports/add-info')
  } else if (whatReport == "lost"){
    res.redirect('/wip/add-reports/demo-add-reports/add-rest')
  } else if (whatReport == "reaction"){
    res.redirect('/wip/add-reports/demo-add-reports/add-reaction')
  } else if (whatReport == "removed"){
    res.redirect('/wip/add-reports/demo-add-reports/add-rest')
  } else if (whatReport == "restricted"){
    res.redirect('/wip/add-reports/demo-add-reports/add-rest')
  } else if (whatReport == "seen"){
  res.redirect('/wip/add-reports/demo-add-reports/add-rest')
  } else if (whatReport == "pol-exam"){
  res.redirect('/wip/add-reports/demo-add-reports/add-pm-pe')
  } else if (whatReport == "foreign"){
  res.redirect('/wip/add-reports/demo-add-reports/add-pm-f')
  }

  else {
    res.redirect('/wip/add-reports/demo-add-reports/add-pm-pe')
  }
})

router.post('/select-service', function (req, res) {
  var whatService = req.session.data['service']
  if (whatService == "drivers"){
    res.redirect('/signed-off/name-links/search-drivers')
  } else if (whatService == "person"){
    res.redirect('/signed-off/name-links/search-person')
  }
})

router.post('/edit-record', function (req, res) {
  var whatEdit = req.session.data['edit']
  if (whatEdit == "update-vehicle"){
    res.redirect('/wip/update-v4/update-vehicle-details')
  } else if (whatEdit == "update-keeper"){
    res.redirect('/wip/update-v4/update-keeper-details')
  } else if (whatEdit == "block"){
    res.redirect('/wip/update-v4/block-record')
  } else if (whatEdit == "foreign"){
    res.redirect('/wip/update-v4/update-foreign')
  } else if (whatEdit == "report"){
    res.redirect('/wip/update-v4/select-report')
  } else if (whatEdit == "polexam"){
    res.redirect('/wip/update-v4/add-polexam')
  } else if (whatEdit == "block-update"){
    res.redirect('/wip/update-v4/update-block')
  } else if (whatEdit == "new"){
    res.redirect('/wip/update-v4/create-record')
  }
  else {
    res.redirect('/VRM-help')
  }
})

router.post('/select-report', function (req, res) {
  var whatReport = req.session.data['report-type']
  if (whatReport == "action"){
    res.redirect('/wip/update-v4/add-action')
  } else if (whatReport == "correction"){
    res.redirect('/wip/update-v4/add-cor')
  } else if (whatReport == "destroyed"){
    res.redirect('/wip/update-v4/add-des')
  } else if (whatReport == "found"){
    res.redirect('/wip/update-v4/add-found')
  } else if (whatReport == "information"){
    res.redirect('/wip/update-v4/add-inf')
  } else if (whatReport == "lost"){
    res.redirect('/wip/update-v4/add-stolen')
  } else if (whatReport == "reaction"){
    res.redirect('/wip/update-v4/add-reaction')
  } else if (whatReport == "removed"){
    res.redirect('/wip/update-v4/add-rem')
  } else if (whatReport == "restricted"){
    res.redirect('/wip/update-v4/add-res')
  } else if (whatReport == "seen"){
  res.redirect('/wip/update-v4/add-see')
} else {
  res.redirect('/wip/update-v3/add-action')
}
})

router.post('/search-scenario', function (req, res) {
  var whatScenario = req.session.data['scenario']
  if (whatScenario == "1a"){
    res.redirect('/wip/update-v3/search')
  } else if (whatScenario == "1b"){
    res.redirect('/wip/update-v3/search')
  }  else if (whatScenario == "1c"){
    res.redirect('/wip/update-v3/overview-2')
  }
  else {
    res.redirect('/wip/update-v3/overview-1a')
  }
})

router.post('/scenario', function (req, res) {
  var whatScenario = req.session.data['scenario']
  if (whatScenario == "1a"){
    res.redirect('/wip/update-v3/overview-1a')
  } else if (whatScenario == "1b"){
    res.redirect('/wip/update-v3/overview-1b')
  }  else if (whatScenario == "1c"){
    res.redirect('/wip/update-v3/overview-2')
  }
  else {
    res.redirect('/wip/update-v3/overview-1a')
  }
})

router.post('/demo-search', function (req, res) {
  var whatSearch = req.session.data['search-by']
  var whatVRM = req.session.data['VRM-input']
  if (whatSearch == "VRM" & whatVRM == "CF60POP"){
    res.redirect('/demo/overview')
  } else if (whatSearch == "VRM" & whatVRM == "BIILLY"){
    res.redirect('/demo/ct-results-complex')
  } else if (whatSearch == "multi-VRM"){
    res.redirect('/demo/multi-VRM')
  }
  else {
    res.redirect('/VRM-help')
  }
})



module.exports = router

var Yadda = require('yadda')

var gui = new Yadda.Library()
    .define('Using the GUI')
    .define(/Given $gender patient/, function(gender) {
        console.log('GUI', gender)
        this.ctx.patient = { gender: gender }
    })
    .define(/with a $specialty specialty/, function(specialty) {
        console.log('GUI', specialty)
        this.ctx.patient.specialty = specialty
    })
    .define('admit patient', function() {
        console.log('GUI', 'Patient:', this.ctx.patient)
    })

var api = new Yadda.Library()
    .define('Using the API')
    .define(/Given $gender patient/, function(gender) {
        console.log('API', gender)
        this.ctx.patient = { gender: gender }
    })
    .define(/with a $specialty specialty/, function(specialty) {
        console.log('API', specialty)
        this.ctx.patient.specialty = specialty
    })
    .define('admit patient', function() {
        console.log('API', 'Patient:', this.ctx.patient)
    })
;

Yadda.createInstance([api, gui]).run([
    'Using the API',
    'Given male patient',
    'with a cardio specialty',
    'admit patient'
], { ctx: {} })






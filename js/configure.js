const sheetSettingsKey = 'ImageViewer';

var func = {};

func.saveSettings = function(meta, callback) {
  tableau.extensions.settings.set(sheetSettingsKey, JSON.stringify(meta));
  tableau.extensions.settings.saveAsync().then((newSavedSettings) => {
    callback(newSavedSettings);
  });
}

func.currentConfig = function(callback) {
  var config = {};

  callback(config);
}

func.initialize = function(callback) {
  var settings = JSON.parse(tableau.extensions.settings.get(sheetSettingsKey));
  console.log("Current Config", settings)
  callback();
}

$(document).ready(function () {
  tableau.extensions.initializeDialogAsync().then(function (openPayload) {

    $('.resetBtn').click(resetSettings);

    $('.mdc-tab').click(function() {
      $('.mdc-tab').removeClass('mdc-tab--active');
      $(this).addClass('mdc-tab--active');
      $('.mdc-card').hide();
      $('.'+$(this).attr('id')+'-card').show();
      //mdc.textField.MDCTextField.attachTo(document.querySelector('.mdc-text-field'));
    });
    func.initialize(function() {
      window.mdc.autoInit();
    });
  });
});

function resetSettings() {

}

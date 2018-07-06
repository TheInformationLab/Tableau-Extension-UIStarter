$(document).ready(function () {
  tableau.extensions.initializeAsync({'configure': configure}).then(function() {

    tableau.extensions.settings.addEventListener(tableau.TableauEventType.SettingsChanged, (settingsEvent) => {

    });

  });
});

function configure() {
  const popupUrl = `${window.location.origin}/configure.html`;
  tableau.extensions.ui.displayDialogAsync(popupUrl, 'Payload Message', { height: 500, width: 500 }).then((closePayload) => {

  }).catch((error) => {
    switch(error.errorCode) {
      case tableau.ErrorCodes.DialogClosedByUser:
        console.log("Dialog was closed by user");
        break;
      default:
        console.error(error.message);
    }
  });
}

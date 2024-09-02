window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // Replace the URL with the path to your own YAML file
  window.ui = SwaggerUIBundle({
    url: "./souvik-swagger.yaml",  // Update with your YAML file name
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};

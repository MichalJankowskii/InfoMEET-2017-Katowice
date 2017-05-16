export function appHttpConfig($httpProvider: ng.IHttpProvider): void {
  // send credentials with Ajax calls to other domains -prevent CORS issues
  $httpProvider.defaults.withCredentials = true;
  $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
}
appHttpConfig.$inject = ["$httpProvider"];

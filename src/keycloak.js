import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
    url: "https://vm.cloud.cbh.kth.se:2521",
    realm: "Fullstack",
    clientId: "fullstack-frontend",
});

export default keycloak;
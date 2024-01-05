import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
    url: "https://auth.localtest.me",
    realm: "Fullstack",
    clientId: "fullstack-frontend",
});

export default keycloak;
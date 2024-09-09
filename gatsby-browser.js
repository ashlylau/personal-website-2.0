import "./src/styles/global.css"
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it


const onClientEntry = () => {
    if (window.location.pathname !== '/404/') {
        console.log('hi');
        window.location = '/404/';
    }
};

const onRouteUpdate = () => {
    if (window.location.pathname !== '/404/') {
        console.log('hi');
        window.location = '/404/';
    }
};

export {
  onClientEntry,
  onRouteUpdate
}

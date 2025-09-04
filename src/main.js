
// // src/main.js
// import { meet } from '@googleworkspace/meet-addons/meet.addons';

// // Replace with your Google Cloud project number
// const CLOUD_PROJECT_NUMBER = '591092797616';

// // URL to redirect after meeting ends
// const MAIN_STAGE_URL = 'https://dev-employer.botshreyasi.com/login';

// /** Setup Side Panel client */
// export async function setUpAddon() {
//     const session = await meet.addon.createAddonSession({ cloudProjectNumber: CLOUD_PROJECT_NUMBER });
//     const sidePanelClient = await session.createSidePanelClient();

//     // Button to start main stage activity
//     document.getElementById('start-activity').addEventListener('click', async () => {
//         await sidePanelClient.startActivity({ mainStageUrl: MAIN_STAGE_URL });
//     });
// }

// /** Setup Main Stage client */
// export async function initializeMainStage() {
//     const session = await meet.addon.createAddonSession({ cloudProjectNumber: CLOUD_PROJECT_NUMBER });
//     await session.createMainStageClient();
// }


// import { meet } from '@googleworkspace/meet-addons/meet.addons';

// const CLOUD_PROJECT_NUMBER = '591092797616';
// const MAIN_STAGE_URL = 'https://anjalirawat09.github.io/meet-addons/src/MainStage.html';

// /** Setup Side Panel client */
// export async function setUpAddon() {
//     const session = await meet.addon.createAddonSession({ cloudProjectNumber: CLOUD_PROJECT_NUMBER });
//     const sidePanelClient = await session.createSidePanelClient();

//     document.getElementById('start-activity').addEventListener('click', async () => {
//     try {
//         await sidePanelClient.startActivity({ mainStageUrl: MAIN_STAGE_URL });
//     } catch (e) {
//         console.error('Failed to start Main Stage:', e);
//         alert('Could not start Main Stage. Try again.');
//     }
// });

// }

// // Expose globally for SidePanel.html
// window.meetAddon = {
//     setUpAddon
// };



import { meet } from '@googleworkspace/meet-addons/meet.addons';

const CLOUD_PROJECT_NUMBER = '591092797616';
// const MAIN_STAGE_URL = 'https://anjalirawat09.github.io/meet-addons/src/MainStage.html';
const MAIN_STAGE_URL = 'https://dev-employer.botshreyasi.com/login';

/**
 * Prepares the add-on Side Panel Client, and adds an event to launch the
 * activity in the main stage when the main button is clicked.
 */
/**
 * Prepares the add-on Side Panel Client, and adds an event to launch the
 * activity in the main stage when the main button is clicked.
 */
export async function setUpAddon() {
    const session = await meet.addon.createAddonSession({
        cloudProjectNumber: CLOUD_PROJECT_NUMBER,
    });
    const sidePanelClient = await session.createSidePanelClient();
    document
        .getElementById('start-activity')
        .addEventListener('click', async () => {
            await sidePanelClient.startActivity({
                mainStageUrl: MAIN_STAGE_URL
            });
        });
}

/**
 * Prepares the add-on Main Stage Client, which signals that the add-on has
 * successfully launched in the main stage.
 */
export async function initializeMainStage() {
    const session = await meet.addon.createAddonSession({
        cloudProjectNumber: CLOUD_PROJECT_NUMBER,
    });
    await session.createMainStageClient();
}
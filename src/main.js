import { meet } from '@googleworkspace/meet-addons/meet.addons';

const CLOUD_PROJECT_NUMBER = '591092797616';

// Correct Main Stage URL
const MAIN_STAGE_URL = 'https://anjalirawat09.github.io/meet-addons/src/MainStage.html';

/** Setup Side Panel client */
export async function setUpAddon() {
    const session = await meet.addon.createAddonSession({ cloudProjectNumber: CLOUD_PROJECT_NUMBER });
    const sidePanelClient = await session.createSidePanelClient();

    document.getElementById('start-activity').addEventListener('click', async () => {
        await sidePanelClient.startActivity({ mainStageUrl: MAIN_STAGE_URL });
    });
}

